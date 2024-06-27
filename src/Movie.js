import React, { useState } from "react";
import "./Movie.css";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const Movie = ({ movie }) => {
  const { id, title, category, likes, dislikes, poster } = movie;
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const total = likeCount + dislikeCount;
  const likePercentage = total === 0 ? 0 : (likeCount / total) * 100;

  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);

  const handleLike = () => {
    if (!likeActive) {
      setLikeCount(likeCount + 1);
      setLikeActive(true);
      if (dislikeActive) {
        setDislikeCount(dislikeCount - 1);
        setDislikeActive(false);
      }
    } else {
      setLikeCount(likeCount - 1);
      setLikeActive(false);
    }
  };

  const handleDislike = () => {
    if (!dislikeActive) {
      setDislikeCount(dislikeCount + 1);
      setDislikeActive(true);
      if (likeActive) {
        setLikeCount(likeCount - 1);
        setLikeActive(false);
      }
    } else {
      setDislikeCount(dislikeCount - 1);
      setDislikeActive(false);
    }
  };

  const handleDelete = () => {
    alert(`Film "${title}" supprimé.`);
  };

  return (
    <div className="movie-card">
      <img src={poster} alt={`${title} poster`} className="movie-poster" />
      <div className="movie-details">
        <div className="movie-title">
          <h2>{title}</h2>
          <span
            className="delete-icon"
            onClick={handleDelete}
            onMouseEnter={() => setDeleteHovered(true)}
            onMouseLeave={() => setDeleteHovered(false)}
          >
            <FaTrash style={{ color: deleteHovered ? "#f44336" : "#888" }} />
          </span>
        </div>
        <p>Category: {category}</p>
        <div className="like-dislike-icons">
          <span
            className={`like-icon ${likeActive ? "active" : ""}`}
            onClick={handleLike}
          >
            {likeActive ? <FaThumbsUp /> : <FaRegThumbsUp />}
            <span className="likes-count">{likeCount}</span>
          </span>
          <span
            className={`dislike-icon ${dislikeActive ? "active" : ""}`}
            onClick={handleDislike}
          >
            {dislikeActive ? <FaThumbsDown /> : <FaRegThumbsDown />}
            <span className="dislikes-count">{dislikeCount}</span>
          </span>
        </div>
        <div className="gauge">
          <div
            className="likes-bar"
            style={{ width: `${likePercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
