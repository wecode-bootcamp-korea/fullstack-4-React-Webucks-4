import React from "react";
import { Link } from "react-router-dom";
import "./TopsNav.scss";

function TopsNav() {
  return (
    <header className="header">
      <p>WeBucks</p>
      <div className="headerMenu">
        <Link to="/">COFFEE</Link>
        <Link to="/">MENU</Link>
        <Link to="/">STORE</Link>
        <Link to="/">WHAT'S NEW</Link>
      </div>
    </header>
  );
}

export default TopsNav;
