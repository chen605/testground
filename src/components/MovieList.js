import React, { useEffect, useState } from "react";
import axios from "../axios/axios";
import "../styles/MovieList.css";
import TargetMovie from "./TargetMovie";

function MovieList({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <>
            <TargetMovie
              isLargeRow
              movie={movie}
              key={movie.id}
              imageUrl={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
            />
          </>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
