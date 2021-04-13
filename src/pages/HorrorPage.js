import React from "react";
import MovieList from "../components/MovieList";
import requests from "../axios/Request";

function HorrorPage() {
  return (
    <div>
      <MovieList
        title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow
      />
    </div>
  );
}

export default HorrorPage;
