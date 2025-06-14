import React, { useEffect, useState, useRef } from "react";
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
import { selectIsMobile } from "@/redux/dataSlice";

export default function Filter({
  searchTerm,
  setSearchTerm,
  selectedTags,
  setSelectedTags,
  setSearchResults,
  isOpen,
  onOpen,
  onClose,
}) {
  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const isMobile = useSelector(selectIsMobile);

  const filterRef = useRef(null);

  console.log(tags);
  //  // Fetch data when the component mounts and when dispatch changes
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Function to handle clearing the search input and results
  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSelectedTags([]);
  };

  // Function to toggle the filter menu
  const toggleMenu = () => {
    // setIsOpen((prev) => !prev);
    // console.log("menu is open now:", !isOpen);

    if (!isOpen) {
      onOpen(); // Call onOpen when opening the menu
    }

    if (isOpen) {
      onClose(); // Call onClose when closing the menu
    }
    // if (isAlreadyOpen) {
    //   onClose(); // Call onClose when closing the menu
    // } else {
    //   onOpen(); // Call onOpen when opening the menu
  };

  // Effect to handle clicks outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        onClose(); // Close the filter if click is outside
      }
    }
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [filterRef]); // Re-run if filterRef changes (unlikely for a static ref)

  if (loading)
    return (
      <div className="p-4">
        <p>Loading, please wait.</p>
      </div>
    );

  if (error) {
    console.log(`Error loading resources:`, error);
    return (
      <div className="p-4">
        <p>Unable to load. Please try again later.</p>
      </div>
    );
  }

  return (
    <div
      ref={filterRef}
      className="absolute left-1.5 md:left-[15.5%] lg:left-[30.25%] -top-25"
    >
      {/*"absolute left-1.5 -top-25"*/} {/* positioning of filter icon */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="filter-menu"
        style={{
          WebkitTapHighlightColor: "transparent",
          touchAction: "manipulation",
        }}
        className={`no-user-select relative flex items-center justify-center w-16 h-12 min-w-[4rem] max-w-[4rem] min-h-[3rem] max-h-[3rem] px-4 rounded-3xl text-2xl border-2 transition-colors duration-200
    ${
      isOpen
        ? "text-[var(--gradient-1)] bg-white border-[var(--gradient-1)]"
        : "text-white bg-gradient-to-r from-[var(--gradient-1)] to-[var(--gradient-2)]"
    }`}
      >
        <FiFilter className="shrink-0" />
        <span
          className={`ml-2 text-base font-bold ${
            isOpen ? "text-[var(--gradient-1)]" : "text-white"
          }`}
        >
          {selectedTags.length > 0 ? `+${selectedTags.length}` : "\u00A0"}
        </span>
        <span className="sr-only">Filter menu based on resource tags</span>
      </button>
      {/**THIS IS THE DIV STYLES NEED TO BE APPLIED TO FOR MODAL**/}
      <div className="relative">
        <div
          id="filter-menu"
          role="dialog"
          aria-label="Filter menu"
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute left-0 top-full mt-3 w-[93vw] md:w-[600px] lg:w-[600px] p-4 bg-surface-tertiary lg:bg-blue-200 border border-gray-200 z-10 rounded-2xl shadow-lg ${isOpen ? "block" : "hidden"}`}
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
                      className="peer sr-only" // gives it a button look rather than a checkbox list, but keeps it visible to screen readers
                    />
                    <span className="inline-block px-3 py-3 rounded-full border border-gray-300 bg-white text-[var(--foreground)] transition-all peer-checked:border-[var(--gradient-1)] peer-checked:text-[var(--gradient-1)] peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[var(--gradient-1)]">
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
