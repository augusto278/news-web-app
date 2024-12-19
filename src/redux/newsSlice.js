import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk untuk fetch data
export const fetchArticles = createAsyncThunk("news/fetchArticles", async (query, thunkAPI) => {
  try {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`);
    const data = await response.json();
    return data.response.docs;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    searchQuery: "",
    isLoading: false,
    error: null,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setSearchQuery } = newsSlice.actions;
export default newsSlice.reducer;
