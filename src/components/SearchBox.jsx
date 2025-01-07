import React, {useState} from "react";

const SearchBox = (props) => {
  const [query, setQuery] = useState('');
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      props.setSearchTerm(query);
    }
  };
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
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
          />
        </div>

        <div className="search-list" id="search-list"></div>
      </div>
    </div>
  );
};

export default SearchBox;
