import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { MdLocalMovies, MdArrowDropDown } from "react-icons/md";
import { NavLink, useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Nav() {
  const user = useSelector(selectUser);
  const history = useHistory();
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
        <h1 onClick={() => history.push("/home")}>
          Chen's Movie CardList DB
          <span className="nav__logo">
            <MdLocalMovies />
          </span>
        </h1>
        <div className="nav__links">
          <NavLink exact to="/home">
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
                    <NavLink exact to="/action" className="link">
                      Action
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="/comedy" className="link">
                      Comedy
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="/horror" className="link">
                      Horror
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="/romance" className="link">
                      Romance
                    </NavLink>
                  </div>
                  <div>
                    <NavLink to="/documentaries" className="link">
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
          <Avatar
            className="nav__container__avatar"
            onClick={() => history.push("/profile")}
          >
            {user.email[0].toUpperCase()}
          </Avatar>
        </div>
      </div>
    </div>
  );
}

export default Nav;
