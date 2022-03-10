import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TopNav from "./TopsNav.module.scss";

function TopsNav() {
  const navigate = useNavigate();
  return (
    <header className={TopNav.header}>
      <p className={TopNav.p} onClick={() => navigate("/")}>
        WeBucks
      </p>
      <div className={TopNav.headerMenu}>
        <Link className={TopNav.link} to="/">
          COFFEE
        </Link>
        <Link className={TopNav.link} to="/">
          MENU
        </Link>
        <Link className={TopNav.link} to="/">
          STORE
        </Link>
        <Link className={TopNav.link} to="/">
          WHAT'S NEW
        </Link>
      </div>
    </header>
  );
}

export default TopsNav;
