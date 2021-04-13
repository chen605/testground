import React from "react";
import MovieList from "../components/MovieList";
import requests from "../axios/Request";

import "../styles/TrendingMovies.css";

function TrendingMoviesPage() {
  return (
    <div className="trending">
      <MovieList
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLargeRow
      />
    </div>
  );
}

export default TrendingMoviesPage;
