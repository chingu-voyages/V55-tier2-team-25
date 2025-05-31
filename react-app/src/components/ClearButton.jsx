import React from "react";

const ClearButton = ({ onClick, name }) => {
  // This component renders a button that clears the search input
  return (


    <div>
      <button
        className="cursor-pointer color-(--gradient-1) font-thin"
        onClick={onClick}
        name={name}
      >
        {name}
      </button>
    </div>
  );
};

export default ClearButton;
