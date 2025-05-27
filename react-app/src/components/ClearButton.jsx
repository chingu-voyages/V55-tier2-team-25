import React from "react";

const ClearButton = ({onClick, name}) => {
  // This component renders a button that clears the search input
  return (
    <div>
      <button className="cursor-pointer"
                   onClick={onClick} name={name}>
      {name}
      </button>
    </div>
  );
}

export default ClearButton;