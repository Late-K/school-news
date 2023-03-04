import React from "react";

function Header() {
  return (
    <div>
      <h1>Thomas Tallis</h1>{" "}
      <img
        style={{ width: "100px" }}
        src={process.env.PUBLIC_URL + "header-logo.png"}
        alt="Header logo"
      ></img>
      <p>Welcome to the Thomas Tallis student news board!</p>
    </div>
  );
}

export default Header;
