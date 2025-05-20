import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../redux/dataSlice';
import SearchBar from './SearchBar';
import SearchButton from './SearchButton';
import SearchResults from './SearchResults';

const SearchContainer = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const { results, loading, error } = useSelector((state) => state.search);

    const handleSearch = () => {
        if (query.trim()) {
            dispatch(fetchSearchResults(query));
        }
    }
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <h2 className="text-2xl font-bold mb-4">🔍 Search</h2>
            <div className="flex flex-row w-full items-center justify-center">
               
                <SearchBar query={query} setQuery={setQuery} />
                
                <SearchButton onClick={handleSearch} />
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {results && results.length > 0 && <SearchResults results={results} />}
        </div>
    );
}
export default SearchContainer;