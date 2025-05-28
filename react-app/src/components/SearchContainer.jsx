import React, { useState, useMemo, useEffect } from "react";
//useDispatch and useSelector are hooks from react-redux that allow you to interact with the Redux store
//useDispatch is used to dispatch actions to the store
//useSelector is used to select data from the store
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectError } from "../redux/dataSlice";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";
import ResourceList from "./ResourceList";
import Filter from "./Filter";
import ClearButton from "./ClearButton";



export default function SearchContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
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

  const handleSearch = (e) => {
    //   console.log("Search button clicked");
    e.preventDefault();

    if (searchTerm.trim() !== "" || selectedTags.length > 0) {
      setLoading(true); // Set loading state
      dispatch(fetchData(searchTerm, selectedTags));
      fetchData(searchTerm);
      // Set filtered resources on submit
      const filteredResources = resources.filter((resource) => {
        const tagNames = resource.appliedTags.map(
          (tagId) => tagMap[tagId] || ""
        );

        const matchesSearch =
          searchTerm === "" ||
          resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tagNames.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.every((selectedTag) => tagNames.includes(selectedTag));

        return matchesSearch && matchesTags;
      });

      //Update search results
      setSearchResults(filteredResources);
      setLoading(false); // Reset loading state
    }
//if the search term is empty and no tags are selected, reset the search results
    if (searchTerm.trim() === "" && selectedTags.length === 0) {
      setSearchResults(resources);
      setLoading(false); // Reset loading state
    }

    console.log("Search term:", searchTerm);
    console.log("Filtered resources:", searchResults);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSelectedTags([]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🔍 Search</h2>
      <div className="flex flex-row w-full items-center justify-center">
        <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTags={selectedTags} setSelectedTags={setSelectedTags} setSearchResults={setSearchResults}/>
        <SearchBar query={searchTerm} setQuery={setSearchTerm} />

        <SearchButton onClick={handleSearch} />
      </div>

      {!loading && searchResults.length === 0 && (
        <p className="mt-4">No results found.</p>
      ) || !loading ? searchResults.length > 0 && (
        <p className="mt-4">Found {searchResults.length} results.</p>
      ) : null}
    
      {/* Clear Search Button */}

<ClearButton onClick={handleClearSearch} name="Clear Search"/>

      <ResourceList
        data={searchResults}
        tags={tags}
        loading={loading}
        error={error}
      />
    </div>
  );
}
