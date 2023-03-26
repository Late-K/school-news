import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="header-container">
      <img
        class="header-image"
        style={{ width: "120px" }}
        src={process.env.PUBLIC_URL + "header-logo.png"}
        alt="Header logo"
      ></img>
      <p className="header-text">
        {"Welcome to the Thomas Tallis student news board!"}
      </p>
    </div>
  );
}

export default Header;
