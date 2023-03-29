import React from "react";

function Footer() {
  let today = new Date();
  return (
    <div className="footer-space">
      <img
        style={{ width: "100px" }}
        src={process.env.PUBLIC_URL + "header-logo.png"}
        alt="Header logo"
      ></img>
      <p>Jeremi Kiermasz © {today.getFullYear()}</p>
    </div>
  );
}

export default Footer;
