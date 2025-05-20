import React from "react";

export default function SearchResults({ results }) {
    if(!results || results.length === 0) {
        return <p>No results found.</p>;
    }


return (
    <div>
      <h3>Search Results:</h3>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>

          //   <li key={item.id} className="border p-2 rounded shadow">
          //   {item.name}
          // </li>
        ))}
      </ul>
    </div>
)
}