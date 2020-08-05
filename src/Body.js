import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img 
          src="https://daily-mix.scdn.co/covers/backtracks/PZN_Repeat_Rewind_DEFAULT-en.jpg"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Repeat Rewind</h2>
          <p>Past songs you couldnt get enough of</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
