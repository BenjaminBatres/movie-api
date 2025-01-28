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
          <Link to='/'>
            <h1>Movie API</h1>
          </Link>
        </div>
        <div className="nav__links-list">
          <li className="nav__link">
          <Link to='/' className="nav__link--anchor link__hover-effect">
              Home
          </Link>
          </li>
          <li className="nav__link">
            <Link
              to='/search'
              className="nav__link--anchor link__hover-effect"
            >
              Search
            </Link>
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
