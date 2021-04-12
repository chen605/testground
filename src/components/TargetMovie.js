import React, { useState } from "react";
import "../styles/TargetMovie.css";
import Synopsis from "./Synopsis";

function TargetMovie({ movie, imageUrl, isLargeRow = false }) {
  const [chosenMovie, setChosenMovie] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original/";
  console.log(movie);
  return (
    <div>
      {chosenMovie
        ? ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <div className="target-movie__container">
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={imageUrl}
                alt={movie.name}
                onClick={() => setChosenMovie(!chosenMovie)}
              />
              <Synopsis
                title={movie.name}
                airDate={movie.first_air_date}
                overview={movie.overview}
                imageUrl={imageUrl}
              />
            </div>
          )
        : ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => setChosenMovie(!chosenMovie)}
            />
          )}
    </div>
  );
}

export default TargetMovie;
