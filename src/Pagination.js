import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesPerPage, setCurrentPage } from "./store/moviesSlice";
import "./Pagination.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const { moviesPerPage, currentPage, totalMovies } = useSelector(
    (state) => state.movies
  );

  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  const handleMoviesPerPageChange = (e) => {
    dispatch(setMoviesPerPage(Number(e.target.value)));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="pagination">
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-button"
        >
          Page précédente
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-button"
        >
          Page suivante
        </button>
      </div>
      <div className="movies-per-page">
        <label htmlFor="movies-per-page">Films par page :</label>
        <select
          id="movies-per-page"
          value={moviesPerPage}
          onChange={handleMoviesPerPageChange}
          className="movies-per-page-select"
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
