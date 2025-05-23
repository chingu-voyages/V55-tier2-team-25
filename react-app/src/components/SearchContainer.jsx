import React, { useState, useMemo, useEffect } from "react";
//useDispatch and useSelector are hooks from react-redux that allow you to interact with the Redux store
//useDispatch is used to dispatch actions to the store
//useSelector is used to select data from the store
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectError } from "../redux/dataSlice";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import ResourceList from "./ResourceList";

function SearchContainer() {
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

  // Handle search submit
  const handleSearch = () => {
    console.log("Search button clicked"); //For testing

    if (searchTerm.trim() !== "") {
      setLoading(true); // Set loading state
      dispatch(fetchData(searchTerm));

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
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">🔍 Search</h2>
      <div className="flex flex-row w-full items-center justify-center">
        <SearchBar query={searchTerm} setQuery={setSearchTerm} />

        <SearchButton onClick={handleSearch} />
      </div>
      {/* {loading && <p>Loading...</p>} */}
      {/* {error && <p>Error: {error}</p>} */}
      {/* {searchResults && searchResults.length > 0 && ( */}
      <ResourceList
        data={searchResults}
        tags={tags}
        loading={loading}
        error={error}
      />
      {/* )} */}
    </div>
  );
}

export default SearchContainer;
