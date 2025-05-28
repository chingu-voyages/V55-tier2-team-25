import React, { useState, useMemo, useEffect } from "react";
//useDispatch and useSelector are hooks from react-redux that allow you to interact with the Redux store
//useDispatch is used to dispatch actions to the store
//useSelector is used to select data from the store
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectError } from "../redux/dataSlice";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import ResourceList from "./ResourceList";
import SearchResults from "./SearchResults";


export default function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const resources = useSelector((state) => state.data.resources);
  const tags = useSelector((state) => state.data.tags); 

  //mapping of tag ids to resources
  const tagMap = useMemo(() => {
    const map = {};
    tags.forEach((tag) => {
      map[tag.id] = tag.tag;
    });
    return map;
  }, [tags]);

  const filteredResources = useMemo(() => {
    if (!searchTerm) return [];
    return resources.filter((resource) => {
      const tagNames = resource.appliedTags.map((tagId) => tagMap[tagId] || "");
      return (
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tagNames.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  });
}, [resources, searchTerm, tagMap]);

   
  const handleSearch = (e) => {
  //   console.log("Search button clicked");
    e.preventDefault();
//search function that filters resources based on search term and selected tags
    if (searchTerm.trim() !== "" || selectedTags.length > 0) {
      setLoading(true); // Set loading state
      // dispatch(fetchData(searchTerm));
      (fetchData(searchTerm));
      // Set filtered resources on submit
      const filteredResources = resources.filter((resource) => {
        const tagNames = resource.appliedTags.map(
          (tagId) => tagMap[tagId] || ""
        );
        return (
          resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tagNames.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      });

      //Update search results
      setSearchResults(filteredResources);
      setLoading(false); // Reset loading state
    }

    //if searchTerm is empty and no tags are selected, return all resources
    if (searchTerm.trim() === "" && selectedTags.length === 0) {
      setSearchResults(resources);
      setLoading(false); // Reset loading state
    }

    console.log("Search term:", searchTerm);
    console.log("Filtered resources:", filteredResources);
 
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">🔍 Search</h2>
      <div className="flex flex-row w-full items-center justify-center">
        <SearchBar query={searchTerm} setQuery={setSearchTerm} />

        <SearchButton onClick={handleSearch} />
      </div>

      {!loading && searchResults.length === 0 && (
        <p className="mt-4">No results found.</p>
      ) || !loading ? searchResults.length > 0 && (
        <p className="mt-4">{searchResults.length} results</p>
      ) : null}

<ClearButton onClick={handleClearSearch} name="Clear Search"/>

      <ResourceList
        data={searchResults}
        tags={tags}
        loading={loading}
        error={error}
      />
    </div>
  );
};