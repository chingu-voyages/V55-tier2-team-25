import React from "react";
// import ResourceItem from "./ResourceItem";
import ResourceList from "./ResourceList";
import { useSelector } from "react-redux";

import {selectLoading, selectError, selectTags } from "../redux/dataSlice";

export default function SearchResults({ results }) {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const tags = useSelector(selectTags);

return (
    <div>
      <h3>Search Results:</h3>
        {results.map((resource) => (
           <div key={`${resource.id}-${resource.name}`} className="flex flex-col items-center justify-center">
{/*           
          
          {/* <ResourceItem
            resource={resource}
            className="h-100 self-center"
            tags={resource.tag} 
          /> */} 
      <ResourceList tags={tags} loading={loading} error={error} />
          
        </div>
      ))}
    </div>
  );
}

//temporarily added resource item but will need to be updated to resource list?
