import React from "react";
import "./index.css";

function Header() {
  const rsvpStyle = {
    bottom: 10,
    color: "white",
    position: "absolute",
    alignItems: "center",
  };
  return (
    <header className="header">
      <div className="title-bg">
        <div className="space title">Laras & Faisal</div>
        <div className="space sub-title">Ambhara Hotel Jakarta</div>
        <div className="space sub-title">11.10.2020</div>
      </div>
      <div className="my-col" style={rsvpStyle}>
        <div style={{ fontFamily: "Tangerine", fontSize: "2rem" }}>
          Kindly RSVP by September 25th
        </div>
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-arrow-down-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"
          />
          <path
            fill-rule="evenodd"
            d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
      </div>
    </header>
  );
}

export default Header;
