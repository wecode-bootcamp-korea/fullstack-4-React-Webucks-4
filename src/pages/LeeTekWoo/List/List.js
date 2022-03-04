import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./List.scss";
import TopsNav from "../TopsNav/TopsNav";
import Card from "./Card";

function List() {
  const [cardList, setCardList] = useState({
    coldBrewCoffee: [],
    brewedCoffee: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/data/coffeeList.json", {
      method: "GET",
    })
      .then((res) => res.json())

      .then((data) => {
        setCardList(data);
      });
  }, []);

  const navigate = useNavigate();

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
          {cardList.coldBrewCoffee.map((card) => {
            return (
              <Card
                name={card.name}
                imageURL={card.imgUrl}
                key={card.id}
                onClick={() => {
                  navigate("/coffee/" + card.id);
                }}
              />
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
          {cardList.brewedCoffee.map((card) => {
            return (
              <Card
                name={card.name}
                imageURL={card.imgUrl}
                key={card.id}
                onClick={() => {
                  navigate("/coffee/" + card.id);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
