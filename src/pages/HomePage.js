import React from "react";
import requests from "../axios/Request";
import MovieList from "../components/MovieList";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home">
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
