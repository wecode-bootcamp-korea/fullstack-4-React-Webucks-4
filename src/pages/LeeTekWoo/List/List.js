import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import list from "./List.module.scss";
import TopsNav from "../TopsNav/TopsNav";
import Card from "./Card";

function List() {
  const [cardList, setCardList] = useState({
    coldBrewCoffee: [],
    brewedCoffee: [],
  });

  useEffect(() => {
    fetch("http://localhost:3001/data/coffeeList.json", {
      method: "GET",
    })
      .then((res) => res.json())

      .then((data) => {
        setCardList(data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <div className={list.listBody}>
      <TopsNav />
      <div className={list.title}>
        <p>
          콜드 브루 커피 ☕
          <span>
            <strong>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</strong>
          </span>
        </p>
      </div>
      <div className={list.coldBrewSet}>
        {cardList.coldBrewCoffee.map((card) => {
          return (
            <Card
              name={card.name}
              imageURL={card.imgUrl}
              key={card.id}
              onClick={() => {
                navigate(`/tekwoo/coffee/${card.id}`);
              }}
            />
          );
        })}
      </div>

      <div className={list.title}>
        <p>
          브루드 커피 ☕
          <span>
            <strong>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</strong>
          </span>
        </p>
      </div>
      <div className={list.brewedSet}>
        {cardList.brewedCoffee.map((card) => {
          return (
            <Card
              name={card.name}
              imageURL={card.imgUrl}
              key={card.id}
              onClick={() => {
                navigate(`/tekwoo/coffee/${card.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default List;
