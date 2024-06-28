import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Card.css";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import {
  deleteMovie,
  likeMovie,
  unlikeMovie,
  dislikeMovie,
  undislikeMovie,
} from "../../store/moviesSlice";

const Card = ({ movie }) => {
  const { id, title, category, likes, dislikes, poster } = movie;
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);
  const [deleteHovered, setDeleteHovered] = useState(false);

  const dispatch = useDispatch();

  const handleLike = () => {
    if (!likeActive) {
      dispatch(likeMovie(id));
      setLikeActive(true);
      if (dislikeActive) {
        dispatch(undislikeMovie(id));
        setDislikeActive(false);
      }
    } else {
      dispatch(unlikeMovie(id));
      setLikeActive(false);
    }
  };

  const handleDislike = () => {
    if (!dislikeActive) {
      dispatch(dislikeMovie(id));
      setDislikeActive(true);
      if (likeActive) {
        dispatch(unlikeMovie(id));
        setLikeActive(false);
      }
    } else {
      dispatch(undislikeMovie(id));
      setDislikeActive(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteMovie(id));
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
        <p>Film de type : {category}</p>
        <div className="like-dislike-icons">
          <span
            className={`like-icon ${likeActive ? "active" : ""}`}
            onClick={handleLike}
          >
            {likeActive ? <FaThumbsUp /> : <FaRegThumbsUp />}
            <span className="likes-count">{likes}</span>
          </span>
          <span
            className={`dislike-icon ${dislikeActive ? "active" : ""}`}
            onClick={handleDislike}
          >
            {dislikeActive ? <FaThumbsDown /> : <FaRegThumbsDown />}
            <span className="dislikes-count">{dislikes}</span>
          </span>
        </div>
        <div className="gauge">
          <div
            className="likes-bar"
            style={{
              width: `${
                likes + dislikes === 0 ? 0 : (likes / (likes + dislikes)) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
