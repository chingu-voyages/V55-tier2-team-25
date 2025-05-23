import React, { useState, useMemo } from "react";
//useDispatch and useSelector are hooks from react-redux that allow you to interact with the Redux store
//useDispatch is used to dispatch actions to the store
//useSelector is used to select data from the store
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataSlice";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import SearchResults from "./SearchResults";

const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

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
    if (searchTerm.trim() !== "") {
      dispatch(fetchData(searchTerm));
    }
    console.log("Search term:", searchTerm);
    console.log("Filtered resources:", filteredResources);
 
  };
//   e.preventDefault();
//   dispatch(setSearchTerm(searchTerm)); // This triggers filtering from existing `resources`
// };

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
      <SearchResults results={filteredResources} />
      {/* tags={tags}  /> */}
      
      {/* )} */}
    </div>
  );
};
export default SearchContainer;
