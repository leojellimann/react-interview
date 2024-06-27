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
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.items = state.items.filter((movie) => movie.id !== action.payload);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
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
} = moviesSlice.actions;

export default moviesSlice.reducer;
