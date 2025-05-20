import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Thunk to fetch search results

export const fetchSearchResults = createAsyncThunk(
'search/fetchSearchResults',
  async (query) => {
    const response = await fetch(`https://seshatbe.up.railway.app/resources/search?query=${query}`);
    return await response.json();
  }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        searchResults: [],
        loading: false,
        error: null,
    },
     extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;