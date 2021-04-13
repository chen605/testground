import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { MdLocalMovies } from "react-icons/md";
import { NavLink, useHistory } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__content">
        <h1>
          Chen's Movie CardList DB
          <span className="nav__logo">
            <MdLocalMovies />
          </span>
        </h1>
        <div className="nav__links">
          <NavLink exact to="/">
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
