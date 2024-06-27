import React, { useEffect, useState } from "react";
import { movies$ } from "./movies";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movies$.then(setMovies);
  }, []);

  return (
    <div className="app">
      <h1>Movies List</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
