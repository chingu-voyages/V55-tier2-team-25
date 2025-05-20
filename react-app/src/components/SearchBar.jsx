import React from "react";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <div className="filter-icon-container flex items-center justify-center p-9 m-0 w-[10%] bg-[#E2E2E2] rounded">
       <FiFilter className="p-0 m-0 text-2xl bg-[#E2E2E2] rounded"/>
      </div>

      <label htmlFor="search-bar" className="sr-only">
        Search Bar
      </label>


        <FiSearch className=" "/>
        <input
          type="text"
          id="search-bar"
          value={query}
          name="search-bar"
          placeholder="
          Enter a topic"
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded p-2 w-[75%]"
        />

    </div>
  );
}
