import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopsNav.module.scss";

function TopsNav() {
  const navigate = useNavigate();
  return (
    <header className={TopNav.header}>
      <p onClick={() => navigate("/")}>WeBucks</p>
      <div className={TopNav.headerMenu}>
        <Link to="/">COFFEE</Link>
        <Link to="/">MENU</Link>
        <Link to="/">STORE</Link>
        <Link to="/">WHAT'S NEW</Link>
      </div>
    </header>
  );
}

export default TopsNav;
