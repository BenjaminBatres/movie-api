import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import noImage from "../assets/no-image.jpg";
import axios from "axios";
import MovieSorter from "./MovieSorter";

const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("latest");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const apiRoute = "https://www.omdbapi.com/?apikey=4053be5e&s="

  async function fetchMovies(userInput) {
    setIsLoading(false)
    if (id) {
      try {
        const { data } = await axios.get(apiRoute + (userInput || id))
        if (data.Search) {
              setMovies(data.Search);
              setTimeout(() => {
                setIsLoading(false);
              }, 250);
              if (sortOrder === "latest") {
                data.Search.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
              } else if (sortOrder === "oldest") {
                data.Search.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
              }
            }
      }
      catch (error) {
        console.log(error)
      }
      setIsLoading(true)
    }
  }
  function sortMovies(event) {
    setSortOrder(event.target.value);
  }

  useEffect(() => {
    fetchMovies();
  }, [id, sortOrder]);
  return (
    <>
      <MovieSorter searchId={id} sortMovies={sortMovies}/>
      {isLoading ? (
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
              {movies.map((movie, id) => (
                <div className="movie" key={id}>
                  <Link to={`/movie/${movie.imdbID}`}>
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
