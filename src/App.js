import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./store/moviesSlice";
import Movie from "./Movie";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.items);
  const movieStatus = useSelector((state) => state.movies.status);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  let content;

  if (movieStatus === "loading") {
    content = <p>Loading...</p>;
  } else if (movieStatus === "succeeded") {
    content = movies.map((movie) => <Movie key={movie.id} movie={movie} />);
  } else if (movieStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <div className="app">
      <h1>Movies List</h1>
      <div className="movies-grid">{content}</div>
    </div>
  );
};

export default App;
