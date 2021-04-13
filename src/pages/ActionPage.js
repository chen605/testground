import React from "react";
import MovieList from "../components/MovieList";
import requests from "../axios/Request";

function ActionPage() {
  return (
    <div>
      <MovieList
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow
      />
    </div>
  );
}

export default ActionPage;
