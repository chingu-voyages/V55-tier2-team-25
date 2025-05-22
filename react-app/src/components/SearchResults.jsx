import React from "react";

export default function SearchResults({ results }) {
    // if(!results || results.length === 0) {
    //     return <p>No results found.</p>;
    // }


return (
    <div>
      <h3>Search Results:</h3>
      <ul>
        {results.map((resource) => (
          <li key={resource.id}>{resource.name}
          <p>{resource.author}</p>
          <p>{resource.description}</p>

          </li>
        ))}
      </ul>
    </div>
)
}