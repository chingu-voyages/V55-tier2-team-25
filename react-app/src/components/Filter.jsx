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

export default function Filter({ searchTerm, setSearchTerm, selectedTags, setSelectedTags, setSearchResults }) {
  // const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  console.log(tags);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSelectedTags([]);
  };

  return (
    <div className="w-full">
      <input type="checkbox" className="hidden peer" id="filter-toggle" />

      {/* Label tied to checkbox via htmlFor - makes this clickable */}
      <label
        htmlFor="filter-toggle"
        className="cursor-pointer flex items-center select-none"
      >
        <FiFilter className="text-3xl text-white bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)] rounded-full w-10 h-10 p-2" />
        <span className="sr-only">Filter menu based on resource tags</span>
      </label>

      <div className="p-4 absolute bg-[var(--background)] border border-gray-200 mt-1 transition-opacity opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto z-10 h-fulloverflow-auto min-w-[150px] rounded-2xl">
        {/* Dropdown content */}
        <div className="flex flex-wrap justify-between">
          <h3 className="font-bold font-3 p-2 pb-4">Filters</h3>
          <ClearButton onClick={handleClearSearch} name="Reset"/>
        </div>
        <legend className="pl-3 flex flex-wrap gap-1">
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
      </div>
    </div>
  );
}
