import React from "react";
import { FiFilter } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex flex-row w-full items-center justify-center">
      <FiFilter className="p-5 m-3 w-[10%] bg-[#E2E2E2] rounded"/>

      <label htmlFor="search-bar" className="sr-only">
        Search Bar
      </label>


        <FiSearch className=" "/>
        <input
          type="text"
          id="search-bar"
          name="search-bar"
          placeholder="
          Pick a topic..."
          className="border rounded p-2 w-[75%]"
        />

    </div>
  );
}
