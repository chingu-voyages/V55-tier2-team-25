import React from "react";

export default function SearchButton({ onSearch }) {
  return (
    <div>
      <button className="bg-gray-500 hover:bg-gray-700  text-white
                   dark:bg-gray-300 dark:hover:bg-gray-100 dark:text-black 
                   p-2 rounded"
                   onClick={onSearch}>
        Search
      </button>
    </div>
  );
}
