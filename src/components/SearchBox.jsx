import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = (props) => {
  const [searchMovie, setSearchMovie] = useState();
const navigate = useNavigate();
  return (
    <div id="landing">
      <div className="header__container">
        <h2 className="header__title">Browse our Movies</h2>
        <div className="input__btn">
          <input
            className="search"
            type="text"
            placeholder="Search movie title"
            id="movie-search"
            onKeyDown={(event) =>
              event.key === "Enter" && navigate(`/search/${searchMovie}`)
            }
            onChange={(event) => setSearchMovie(event.target.value)}
          />
          <button className="search-btn" onClick={() => navigate(`/search/${searchMovie}`)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>

        <div className="search-list" id="search-list"></div>
      </div>
    </div>
  );
};

export default SearchBox;
