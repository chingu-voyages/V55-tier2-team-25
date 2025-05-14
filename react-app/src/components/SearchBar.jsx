import React from "react";

export default function SearchBar() {
  return (
    <div>
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
