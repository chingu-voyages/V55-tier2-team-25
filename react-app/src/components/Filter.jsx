import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  selectTags,
  selectError,
  selectLoading,
} from "@/redux/dataSlice";
import { FiFilter } from "react-icons/fi";
import { FiTag } from "react-icons/fi";
import ClearButton from "./ClearButton";
// import { searchResults } from "./SearchContainer";

export default function Filter({
  searchTerm,
  setSearchTerm,
  selectedTags,
  setSelectedTags,
  setSearchResults,
}) {
  // const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const [isOpen, setIsOpen] = useState(false);

  console.log(tags);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSelectedTags([]);
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  if (loading)
    return (
      <div className="p-4">
        <p className="p-4">Loading filters</p>
      </div>
    );

  if (error) {
    console.log(`Error loading resources:`, error);
    return (
      <div className="p-4">
        <p>Unable to load filters. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="absolute left-1.5 -top-25">
      {" "}
      {/* positioning of filter icon */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="filter-menu"
        className="cursor-pointer flex items-center"
      >
        <FiFilter
          className={`text-5xl rounded-full p-2 ${
            isOpen
              ? "text-[var(--gradient-1)] bg-white border-2 border-[var(--gradient-1)]"
              : "text-white bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]"
          }`}
        />
        <span className="sr-only">Filter menu based on resource tags</span>
      </button>
      <div className="relative">
        <div
          id="filter-menu"
          role="dialog"
          aria-label="Filter menu"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute left-0 top-full mt-3 w-[93vw] p-4 bg-white border border-gray-200 z-10 rounded-2xl shadow-lg ${isOpen ? "block" : "hidden"}`}
        >
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Filters</h2>
            <ClearButton onClick={handleClearSearch} name="Reset" />
          </div>

          <fieldset className="mt-4">
            <legend className="pl-3 flex flex-wrap gap-1 pt-4">
              <FiTag className="self-center" />
              <span className="sr-only">Filter by</span>Tags
            </legend>
            <ul className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <li key={tag.id}>
                  <label
                    htmlFor={`tag-${tag.id}`}
                    className="flex whitespace-nowrap cursor-pointer px-2 py-1 transition-colors"
                  >
                    <input
                      type="checkbox"
                      id={`tag-${tag.id}`}
                      value={tag.tag}
                      checked={(selectedTags || []).includes(tag.tag)}
                      onChange={(e) => {
                        const value = e.target.value;
                        setSelectedTags(
                          (prev) =>
                            prev.includes(value)
                              ? prev.filter((tag) => tag !== value) // remove if already selected
                              : [...prev, value] // add if not selected
                        );
                      }}
                      className="peer hidden" // gives it a button look rather than a checkbox list
                    />
                    <span className="inline-block px-3 py-3 rounded-full border border-[var(--foreground)] bg-white text-[var(--foreground)] peer-checked:border-[var(--gradient-1)] peer-checked:text-[var(--gradient-1)] transition-all">
                      {tag.tag}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
