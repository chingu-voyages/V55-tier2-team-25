import React from "react";
import ResourceItem from "./ResourceItem";

export default function SearchResults({ results }) {
    // if(!results || results.length === 0) {
    //     return <p>No results found.</p>;
    // }


return (
    <div>
      <h3>Search Results:</h3>
        {results.map((resource) => (
           <div key={`${resource.id}-${resource.name}`} className="flex flex-col items-center justify-center">
          <ResourceItem
            resource={resource}
            className="h-100 self-center"
            tags={resource.tag} 
          />
        </div>
      ))}
    </div>
  );
}

   {/* <ResourceItem
                key={`${results.id}-${results.name}`}
                resource={results}
                tags={tags}
                className="h-100 self-center"
              /> */}

