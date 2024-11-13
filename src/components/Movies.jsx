import React from "react";
import { Link } from "react-router-dom";
import noImage from "../assets/no-image.jpg";

const Movies = (props) => {
  return (
    <>
      {props.isLoading ? (
        <div className="movie__container">
        <div className="row display-flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            fill="currentColor"
            className="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
            />
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
          </svg>
        </div>
      </div>
      ) : (
        <div className="movie__container">
          <div className="row">
            <div className="movie-list" id="movie-list">
              {props.movies.map((movie) => (
                <div className="movie">
                  <Link to={`/movie/${movie.imdbID}`} key={movie.id}>
                    <div className="movie-card">
                      <img
                        src={movie.Poster !== "N/A" ? movie.Poster : noImage}
                        alt={movie.Title}
                      />
                      <h3 className="movie-title">{movie.Title}</h3>
                      <div className="movie-description">
                        <p className="movie-year">{movie.Year}</p>
                        <p className="movie-series">{movie.Type}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
