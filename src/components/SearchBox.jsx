import React from "react";

const SearchBox = (props) => {
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
            value={props.value}
            onChange={(event) => props.setSearchTerm(event.target.value)}
          />
        </div>

        <div className="search-list" id="search-list"></div>
      </div>
    </div>
  );
};

export default SearchBox;
