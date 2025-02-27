import React from "react";

const MovieSorter = ({ searchId, sortMovies }) => {
  return (
    <section id="movie-results">
      <div className="container">
        <div className="row">
          <div className="search-results-list">
            <div className="search__wrapper">
              <h2 className="search__title" id="search-results-list">
                Search Results: {searchId}
              </h2>
              <select
                id="sortOrder"
                onChange={sortMovies}
                className="custom-select"
              >
                <option value="latest">Latest - Oldest</option>
                <option value="oldest">Oldest - Latest</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieSorter;
