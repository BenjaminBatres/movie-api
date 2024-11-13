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
        </div>
        <div className="header__img--wrapper">
          <img src={undrawBooks} className="header__img" alt="" />
        </div>
      </header>
    </div>
  );
};

export default Home;
