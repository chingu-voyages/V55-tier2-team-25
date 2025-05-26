import React, { useState } from "react";
import Filter from "./Filter";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ query, setQuery }) {
  console.log("setQuery prop:", query);

  return (
    <div className="flex flex-row w-full items-center justify-center">
      <Filter />

      <label htmlFor="search-bar" className="sr-only">
        Search Bar
      </label>

      <FiSearch className="mr-2 text-gray-500" />
      <input
        type="text"
        id="search-bar"
        value={query}
        name="search-bar"
        placeholder="Enter a topic"
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded p-2 w-[75%]"
      />
    </div>
  );
}
