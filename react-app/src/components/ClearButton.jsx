import React from "react";

const ClearButton = ({onClick}) => {
  // This component renders a button that clears the search input
  return (
    <div>
      <button className="cursor-pointer"
                   onClick={onClick}>
        Reset
      </button>
    </div>
  );
}

export default ClearButton;