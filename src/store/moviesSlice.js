import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movies$ } from "../movies";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await movies$;
  return response;
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    categoryFilter: [],
    moviesPerPage: 12,
    currentPage: 1,
    totalMovies: 0,
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.items = state.items.filter((movie) => movie.id !== action.payload);
      state.totalMovies -= 1;
    },
    likeMovie: (state, action) => {
      const movie = state.items.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes += 1;
      }
    },
    unlikeMovie: (state, action) => {
      const movie = state.items.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes -= 1;
      }
    },
    dislikeMovie: (state, action) => {
      const movie = state.items.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.dislikes += 1;
      }
    },
    undislikeMovie: (state, action) => {
      const movie = state.items.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.dislikes -= 1;
      }
    },
    setCategoryFilter: (state, action) => {
      state.categoryFilter = action.payload;
      state.currentPage = 1;
    },
    setMoviesPerPage: (state, action) => {
      state.moviesPerPage = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        state.totalMovies = action.payload.length;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  deleteMovie,
  likeMovie,
  unlikeMovie,
  dislikeMovie,
  undislikeMovie,
  setCategoryFilter,
  setMoviesPerPage,
  setCurrentPage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
