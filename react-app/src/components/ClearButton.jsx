import React from "react";

const ClearButton = ({onClick}) => {
  // This component renders a button that clears the search input
  return (
    <div>
      <button className="bg-gray-500 hover:bg-gray-700  text-white
                   dark:bg-gray-300 dark:hover:bg-gray-100 dark:text-black 
                   p-2 rounded"
                   onClick={onClick}>
        Clear Search
      </button>
    </div>
  );
}

export default ClearButton;