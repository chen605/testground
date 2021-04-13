import React from "react";
import MovieList from "../components/MovieList";
import requests from "../axios/Request";

function DocumentaryPage() {
  return (
    <div>
      <MovieList
        title="Documentary"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow
      />
    </div>
  );
}

export default DocumentaryPage;
