import React from "react";
import MovieList from "../components/MovieList";
import requests from "../axios/Request";

function RomancePage() {
  return (
    <div>
      <MovieList
        title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow
      />
    </div>
  );
}

export default RomancePage;
