import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/moviesSlice";
import Movie from "./Movie";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { items, moviesPerPage, currentPage, categoryFilter } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies =
    categoryFilter.length > 0
      ? items.filter((movie) => categoryFilter.includes(movie.category))
      : items;

  const startIndex = (currentPage - 1) * moviesPerPage;
  const selectedMovies = filteredMovies.slice(
    startIndex,
    startIndex + moviesPerPage
  );

  return (
    <div className="app">
      <h1>Movies List</h1>
      <CategoryFilter />
      <Pagination />
      <div className="movies-grid">
        {selectedMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
