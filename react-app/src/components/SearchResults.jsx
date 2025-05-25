import React from "react";
import ResourceItem from "./ResourceItem";

export default function SearchResults({ results }) {

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

