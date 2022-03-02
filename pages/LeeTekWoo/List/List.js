import React, { useEffect, useState } from "react";
import "./List.scss";
import TopsNav from "../TopsNav/TopsNav";
import { Link } from "react-router-dom";
import Card from "./Card";

function List() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/data/PRODUCT_CARD.json", {
      method: "GET",
    })
      .then((res) => res.json()) // res.json() 역할이 무엇인지
      .then((data) => {
        setCardList(data);
      });
  });

  return (
    <div className="listBody">
      <TopsNav />
      <div className="content">
        <div className="title">
          <p>
            콜드 브루 커피 ☕
            <span>
              <strong>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</strong>
            </span>
          </p>
        </div>
        <div className="coldBrewSet">
          {cardList.map((card) => {
            if (card.type === "Cold Brew")
              return (
                <Card name={card.name} imageURL={card.imageURL} key={card.id} />
              );
          })}
        </div>
      </div>
      <div className="content">
        <div className="title">
          <p>
            브루드 커피 ☕
            <span>
              <strong>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</strong>
            </span>
          </p>
        </div>
        <div className="brewedSet">
          {cardList.map((card) => {
            if (card.type === "Brewed Coffee") {
              return (
                <Card name={card.name} imageURL={card.imageURL} key={card.id} />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
