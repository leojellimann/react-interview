import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMoviesPerPage, setCurrentPage } from "../../store/moviesSlice";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`page-number ${currentPage === i ? "active" : ""}`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="page-arrow"
      >
        <FaChevronLeft />
      </button>
      <div className="page-numbers">{renderPageNumbers()}</div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="page-arrow"
      >
        <FaChevronRight />
      </button>
      <div className="movies-per-page">
        <label htmlFor="movies-per-page">Montrer :</label>
        <select
          id="movies-per-page"
          value={moviesPerPage}
          onChange={handleMoviesPerPageChange}
          className="movies-per-page-select"
        >
          <option value={4}>4 films</option>
          <option value={8}>8 films</option>
          <option value={12}>12 films</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
