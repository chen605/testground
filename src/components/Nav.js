import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { MdLocalMovies, MdArrowDropDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const [collapse, setCollapse] = useState(false);

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
          <NavLink exact to="/trending">
            Trending
          </NavLink>
          {collapse ? (
            <>
              <h3 onClick={() => setCollapse(!collapse)}>
                Genre
                <MdArrowDropDown />
              </h3>
              <div className="nav__container__genres">
                <div className="nav__container__genre">
                  <div>
                    <NavLink exact to="/Action" className="link">
                      Action
                    </NavLink>
                  </div>
                  <div>
                    <NavLink exact to="/Comedy" className="link">
                      Comedy
                    </NavLink>
                  </div>
                  <div>
                    <NavLink exact to="/Horror" className="link">
                      Horror
                    </NavLink>
                  </div>
                  <div>
                    <NavLink exact to="/Romance" className="link">
                      Romance
                    </NavLink>
                  </div>
                  <div>
                    <NavLink exact to="/Documentaries" className="link">
                      Documentaries
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h3 onClick={() => setCollapse(!collapse)}>
              Genre
              <MdArrowDropDown />
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
