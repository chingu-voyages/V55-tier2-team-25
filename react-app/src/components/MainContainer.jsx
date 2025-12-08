import React, { useState, useMemo, useEffect } from "react";
//useDispatch and useSelector are hooks from react-redux that allow you to interact with the Redux store
//useDispatch is used to dispatch actions to the store
//useSelector is used to select data from the store
import { useDispatch, useSelector } from "react-redux";
import {
  fetchData,
  selectError,
  selectMostRecent,
  selectLoading,
  selectTags,
  fetchTags,
} from "../redux/dataSlice";
import SearchBar from "./SearchControl/SearchBar";
import SearchButton from "./SearchControl/SearchButton";
import ResourceList from "./Results/ResourceList";
import Filter from "./SearchControl/Filter";
import ClearButton from "./SearchControl/ClearButton";

export default function SearchContainer({
  onOpenFilter,
  isFilterOpen,
  onCloseFilter,
  showFilter,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const resources = useSelector((state) => state.data.resources);

  const tags = useSelector(selectTags);
  useEffect(() => {
    if (!tags || tags.length === 0) {
      dispatch(fetchTags());
    }
  }, [dispatch, tags]);

  //to get the newly picked
  const latest = useSelector(selectMostRecent);
  const isLatestLoaded = useSelector((state) => state.data.isLatestLoaded);

  useEffect(() => {
    if (!isLatestLoaded) {
      dispatch(fetchData());
    }
  }, [dispatch, isLatestLoaded]);

  //function to close the filter menu if it's open after the search is performed
  const closeIfOpen = () => {
    if (isFilterOpen) {
      onCloseFilter(); // Close the filter menu if it's open
    }
  };

  //mapping of tag ids to resources
  const tagMap = useMemo(() => {
    const map = {};
    tags.forEach((tag) => {
      map[tag.id] = tag.tag;
    });
    return map;
  }, [tags]);

  //handles the search button click
  const handleSearch = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
  
    if (searchTerm.trim() !== '' || selectedTags.length > 0) {
      setLoading(true) // Set loading state
      setHasSearched(true) // Set hasSearched to true when a search is performed
      dispatch(fetchData(searchTerm))
    }

    if (searchTerm.trim() !== "" || selectedTags.length > 0) {
      setLoading(true); // Set loading state
      setHasSearched(true); // Set hasSearched to true when a search is performed

      // dispatch(fetchData(searchTerm, selectedTags))
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
      closeIfOpen(); // Close the filter menu if it's open
    }
  
    //if the search term is empty and no tags are selected, reset the search results
    if (searchTerm.trim() === "" && selectedTags.length === 0) {
      setSearchResults(resources);
      setLoading(false); // Reset loading state
      setHasSearched(true); // Set hasSearched to true even if no search term is provided
      closeIfOpen(); // Close the filter menu if it's open
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      handleSearch(e); // Call the search function
      setHasSearched(true); // Set hasSearched to true when Enter is pressed
    }
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
    setSelectedTags([]);
    setHasSearched(false); // Reset hasSearched when clearing the search
  };


  return (
    <div className="p-4 min-w-[375px]">
      <h2 className="text-2xl font-bold mb-4 sr-only">Search</h2>
      <div className="flex flex-row w-full items-center justify-center gap-4 relative mb-4">
        <SearchBar
          className="max-w-md w-full"
          query={searchTerm}
          setQuery={setSearchTerm}
          handleKeyDown={handleKeyDown}
        />
        <Filter
          className="max-w-md w-full"
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          setSearchResults={setSearchResults}
          isOpen={isFilterOpen}
          onOpen={onOpenFilter}
          onClose={onCloseFilter}
        />

        <div className="flex items-center z-30 space-x-2 absolute right-5 md:right-[18%] lg:right-[32%] -top-[5.5rem] gap-1">
          <ClearButton
            onClick={() => {
              handleClearSearch();
              closeIfOpen();
            }}
            name="X"
          />
          <SearchButton onClick={handleSearch} />
        </div>
      </div>

      <div className={`p-4 ${isFilterOpen ? "blurred-background" : ""}`}>
        <div className="pt-4">
          {!loading && !error && !hasSearched ? (
            <p className="text-gray-600 italic">
              Start searching by typing in a keyword or selecting a filter.
            </p>
          ) : hasSearched ? (
            <>
              {searchResults.length === 0 ? (
                <h2 className="font-bold text-xl">No results found.</h2>
              ) : searchResults.length === 1 ? (
                <h2 className="font-bold text-xl">1 Result Found</h2>
              ) : (
                <h2 className="font-bold text-xl">
                  {searchResults.length} Results Found
                </h2>
              )}
            </>
          ) : null}
        </div>

        <ResourceList
          title={"Search Results"}
          data={searchResults}
          tags={tags}
          loading={loading}
          error={error}
        />

        <ResourceList
          title={"Newly Picked"}
          data={latest}
          tags={tags}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
} 

