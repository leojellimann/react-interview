import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./store/moviesSlice";
import Card from "./components/Card/Card";
import CategoryFilter from "./components/Category/CategoryFilter";
import Pagination from "./components/Pagination/Pagination";
import "./App.css";
import logo from "./assets/icons/logo.svg";

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
      <h1 className="title">
        <img src={logo} alt="Logo" className="logo" />
        Liste de films de Jelli
      </h1>
      <CategoryFilter />
      <div className="movies-grid">
        {selectedMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default App;
