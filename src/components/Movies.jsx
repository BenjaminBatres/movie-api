import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import noImage from '../assets/no-image.jpg'

const Movies = (props) => {
  return (
    <>
      <div className="movie__container">
        <div className="row">
          <div className="movie-list" id="movie-list">
            {props.movies.map((movie) => (
              <div className="movie" >
                <Link to={`/movie/${movie.imdbID}`} key={movie.id} >
                <div className="movie-card" >
                  <img src={movie.Poster !== "N/A" ? movie.Poster : noImage} alt={movie.Title}/>
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
    </>
  );
};

export default Movies;
