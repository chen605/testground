import React from "react";
import "../styles/Synopsis.css";

function Synopsis({ title, airDate, overview, imageUrl }) {
  return (
    <div
      className="synopsis"
      style={{
        backgroundSize: "cover",
        backgroundImage: `-moz-linear-gradient(to right, #0d0d0c 5%, transparent 130%), url("${imageUrl}") `,
        backgroundPosition: "center center",
      }}
    >
      <div className="synopsis__container">
        <h2>{title}</h2>
        <span>{airDate}</span>
        <p>{overview}</p>
        <div className="synopsis__buttons">
          <button>Play trailer</button>
        </div>
      </div>
    </div>
  );
}

export default Synopsis;
