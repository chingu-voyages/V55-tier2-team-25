import React, { useState } from "react";
import Filter from "./Filter";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ query, setQuery, handleKeyDown }) {
  console.log("setQuery prop:", query);

  return (
    <div className="absolute w-full top-0">{/* positioning of search bar */}

      <label htmlFor="search-bar" className="sr-only">
        Search Bar
      </label>

      
      <input
        type="text"
        id="search-bar"
        value={query}
        name="search-bar"
        placeholder="Find your next pick..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border rounded-4xl p-2 bg-white w-[100%] pl-20 h-14 absolute -top-26 text-sm self-center"
      />
      <FiSearch className="mr-2 text-gray-500 absolute -top-21 left-16"/>
    </div>
  );
}
