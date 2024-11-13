import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  function showAlert() {
    alert("This feature has not been implemented.")
  }
  return (
    <nav>
      <div className="nav__container">
        <div className="logo__wrapper">
          <h1>Movie API</h1>
        </div>
        <div className="nav__links-list">
          <li className="nav__link">
          <Link to='/' className="nav__link--anchor link__hover-effect">
              Home
          </Link>
          </li>
          <li className="nav__link">
            <a
              href="#movie-search"
              className="nav__link--anchor link__hover-effect"
            >
              Find your movie
            </a>
          </li>
          <li className="nav__link">
          <button className="nav__link--anchor contact-btn" onClick={() => showAlert()}>Contact</button>

          </li>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
