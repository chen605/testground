import React, { useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import SignupScreen from "../components/SignupScreen";
import "../styles/LandingPage.css";

function LandingPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <h1 className="loginScreen__logo">
          Chen's Movie CardList DB{" "}
          <span className="loginScreen__logo__icon">
            <MdLocalMovies />
          </span>
        </h1>
        <button className="loginScreen__button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited collection of Movies, TV programmes and more.</h1>
            <h3>
              Find everything you need to know about Movies and TV shows in our
              MovieCardDb.
            </h3>
            <button
              className="loginScreen__getStarted"
              onClick={() => setSignIn(true)}
            >
              GET STARTED
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
