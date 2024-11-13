import React, { useState } from "react";
import undrawBooks from "../assets/undraw_home_cinema.svg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [searchMovie, setSearchMovie] = useState();
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <h1 className="landing__title">Browse our Movies</h1>
        <div className="input__btn">
          <input
            className="search"
            type="text"
            placeholder="Search movie title"
            id="movie-search"
            value={searchMovie}
            onKeyPress={(event) =>
              event.key === "Enter" && navigate(`${searchMovie}`)
            }
            onChange={(event) => setSearchMovie(event.target.value)}
          />
          <button className="search-btn" onClick={() => navigate(`${searchMovie}`)} on>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
        <div className="header__img--wrapper">
          <img src={undrawBooks} className="header__img" alt="" />
        </div>
      </header>
    </div>
  );
};

export default Home;
