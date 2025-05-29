import React from "react";

const SearchButton = ({ onClick }) => {
  return (
    <div className="absolute right-3 -top-23"> {/* positioning of search button */}
      <button className="cursor-pointer font-medium text-[var(--gradient-1)]"
                   onClick={onClick}>
        Search
      </button>
    </div>
  );
}

export default SearchButton;