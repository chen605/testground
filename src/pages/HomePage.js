import React from "react";
import requests from "../axios/Request";
import MovieList from "../components/MovieList";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <h1>Chen's Movie CardList DB</h1>
      <div className="home__container">
        <MovieList
          title="Featured"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
      </div>
    </div>
  );
}

export default HomePage;
