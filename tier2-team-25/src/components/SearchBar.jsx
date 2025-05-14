import React from "react";

export default function Header() {
  return (
    <div>
      <header className="text-black p-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded p-2"
        />
      </header>
    </div>
  );
}
