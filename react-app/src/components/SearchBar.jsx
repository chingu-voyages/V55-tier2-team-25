import React from "react";
import { FiFilter } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div>
      <FiFilter className="m-5"/>

      <label htmlFor="search-bar" className="sr-only">
        Search Bar
      </label>
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="Search..."
        className="border rounded p-2"
      />
    </div>
  );
}
