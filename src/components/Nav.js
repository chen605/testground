import React from "react";
import "../styles/Nav.css";
import { MdLocalMovies } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__title">
        <h1>
          Chen's Movie CardList DB
          <span className="nav__logo">
            <MdLocalMovies />
          </span>
        </h1>
      </div>
      <div className="nav__links">
        <NavLink exact to="/">
          Home
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
