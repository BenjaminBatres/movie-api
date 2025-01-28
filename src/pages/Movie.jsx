import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImage from "../assets/no-image.jpg";

const MovieInfo = (props) => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function showAlert() {
    alert("This feature has not been implemented.");
  }

  async function fetchMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=4053be5e`
    );
    setMovie(data);
    setTimeout(() => {
      setIsLoading(false)
    }, 250);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMovie();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="movies__body">
          <div className="movies__main">
            <div className="movies__container">
              <div className="row">
              <div className="movie__selected--top">
                  <button
                    className="return-btn"
                    onClick={() => window.history.back()}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-chevron-double-left movie__link"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                      <path
                        fillRule="evenodd"
                        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                  </button>
                  <button onClick={() => window.history.back()}
                    className="return-btn"
                  >
                    Back
                  </button>
                </div>
                <div className="movie__selected">
                  <figure className="movie__selected--figure">
                    <div className="movie__selected--img shimmer"></div>
                  </figure>
                  <div className="movie__selected--description">
                    <h2 className="movie__selected--title--skeleton shimmer"></h2>
                    <div className="movie__summary">
                      <p className="movie__summary--para--skeleton shimmer"></p>
                      <button className="watch-btn--skeleton" onClick={() => showAlert()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-play-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                        </svg>
                        loading...
                      </button>
                      <div className="movie__row--skeleton">
                        <div className="column--left">
                        <p className="row-line--skeleton shimmer"></p>
                        <p className="row-line--skeleton shimmer"></p>
                        <p className="row-line--skeleton shimmer"></p>
                        </div>
                        <div className="column--right">
                        <p className="row-line--skeleton shimmer"></p>
                        <p className="row-line--skeleton shimmer"></p>
                        <p className="row-line--skeleton shimmer"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="movies__body">
          <main className="movies__main">
            <div className="movies__container">
              <div className="row">
                <div className="movie__selected--top">
                  <button onClick={() => window.history.back()}
                    className="return-btn"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-chevron-double-left movie__link"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                      <path
                        fillRule="evenodd"
                        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                      />
                    </svg>
                  </button>
                  <button onClick={() => window.history.back()}
                    className="return-btn"
                  >
                    Back
                  </button>
                </div>
                <div className="movie__selected">
                  <figure className="movie__selected--figure">
                    <img
                      src={movie.Poster !== "N/A" ? movie.Poster : noImage}
                      alt={movie.Title}
                    />
                  </figure>
                  <div className="movie__selected--description">
                    <h2 className="movie__selected--title">{movie.Title}</h2>
                    <div className="movie__summary">
                      <p className="movie__summary--para">{movie.Plot}</p>
                      <button className="watch-btn" onClick={() => showAlert()}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-play-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                        </svg>
                        Watch Now
                      </button>
                      <div className="movie__row">
                        <p className="row-line">Released: {movie.Released}</p>
                        <p className="row-line">Duration: {movie.Runtime}</p>
                        <p className="row-line">Rated: {movie.Rated}</p>
                        <p className="row-line">Country: {movie.Country}</p>
                        <p className="row-line">Genre: {movie.Genre}</p>
                        <p className="row-line">Cast: {movie.Actors}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default MovieInfo;
