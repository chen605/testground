import React from "react";
import MovieList from "../components/MovieList";
import requests from "../axios/Request";

function ComedyPage() {
  return (
    <div>
      <MovieList
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
    </div>
  );
}

export default ComedyPage;
