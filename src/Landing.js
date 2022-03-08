import React from "react";
import styles from "./Landing.module.scss";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <section className={styles.landing}>
      <h1>Foundation Team 4</h1>
      <h2>Landing Page</h2>
      <ul>
        <li className={styles.teammates}>
          이택우의 Webucks
          <ul className={styles.pages}>
            <li onClick={() => navigate("/login-tekwoo")}>Login</li>
            <li onClick={() => navigate("/tekwoo/coffee")}>List</li>
            <li
              onClick={() =>
                navigate("/tekwoo/coffee/SignatureTheBlackColdBrew")
              }
            >
              Detail
            </li>
          </ul>
        </li>
        <li className={styles.teammates}>
          공민지의 Webucks
          <ul className={styles.pages}>
            <li onClick={() => navigate("/login-minji")}>Login</li>
            <li onClick={() => navigate("/list-minji")}>List</li>
            <li onClick={() => navigate("/detail-minji")}>Detail</li>
          </ul>
        </li>
        <li className={styles.teammates}>
          김연주의 Webucks
          <ul className={styles.pages}>
            <li onClick={() => navigate("/Login-yeonjoo")}>Login</li>
            <li onClick={() => navigate("/List-yeonjoo")}>List</li>
            <li onClick={() => navigate("/Detail-yeonjoo")}>Detail</li>
          </ul>
        </li>
        <li className={styles.teammates}>
          서채원의 Webucks
          <ul className={styles.pages}>
            <li onClick={() => navigate("/Login-ChaeWon")}>Login</li>
            <li onClick={() => navigate("/List-ChaeWon")}>List</li>
            <li onClick={() => navigate("/Detail-ChaeWon")}>Detail</li>
          </ul>
        </li>
        <li className={styles.teammates}>
          임경훈의 Webucks
          <ul className={styles.pages}>
            <li onClick={() => navigate("/login-gyeonghun")}>Login</li>
            <li onClick={() => navigate("/list-gyeonghun")}>List</li>
            <li onClick={() => navigate("/detail-gyeonghun")}>Detail</li>
          </ul>
        </li>
        <li className={styles.teammates}>
          김민우의 Webucks
          <ul className={styles.pages}>
            <li onClick={() => navigate("/login-minwoo")}>Login</li>
            <li onClick={() => navigate("/list-minwoo")}>List</li>
            <li onClick={() => navigate("/detail-minwoo")}>Detail</li>
          </ul>
        </li>
      </ul>
      <footer>☕</footer>
    </section>
  );
}

export default Landing;
