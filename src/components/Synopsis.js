import React from "react";
import { MdShare, MdFavorite, MdChatBubble } from "react-icons/md";
import "../styles/Synopsis.css";

function Synopsis({ title, airDate, overview, imageUrl }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

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
        <h1>{title}</h1>
        <h4>{airDate}</h4>
        <p>{truncate(`${overview}`, 250)}</p>
        <div className="synopsis__buttons">
          <button>Play trailer</button>
        </div>
        <span className="synopsis__icons">
          <MdShare />
          <MdFavorite />
          <MdChatBubble />
        </span>
      </div>
    </div>
  );
}

export default Synopsis;
