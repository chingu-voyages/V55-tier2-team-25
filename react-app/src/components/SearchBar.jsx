import React from "react";
import { FiFilter } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div>
      <FiFilter className="m-5 bg-gray-200"/>

      <label htmlFor="search-bar" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="Search..."
        className="border border-gray-300 rounded p-2"
      />
    </div>
  );
}
