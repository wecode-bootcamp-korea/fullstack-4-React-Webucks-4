import React, { useState, useEffect } from "react";
import "./List.scss";
import Card from "../Card/Card.js";

function List() {
  const [coffeeList, setCoffeeList] = useState({
    coldBrewCoffee: [],
    brewedCoffee: [],
  });

  useEffect(() => {
    fetch("/data/coffeeList.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCoffeeList(data);
      });
  });

  return (
    <div className="List">
      <div className="section">
        {/*콜드 브루 타이틀*/}
        <div className="title">
          <span>콜드 브루 커피</span>
          <i className="fa-solid fa-mug-hot"></i>
          <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
        </div>

        {/*콜드 브루 메뉴판 */}
        <ul className="menus">
          {coffeeList.coldBrewCoffee.map((coffee) => {
            return <Card name={coffee.name} imgUrl={coffee.imgUrl} />;
          })}
        </ul>
      </div>

      <div className="section">
        {/* <!-- 브루드 커피 타이틀 --> */}
        <div className="title">
          <span>브루드 커피</span>
          <i className="fa-solid fa-mug-hot"></i>
          <span>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
        </div>
        {/* <!-- 브루드 커피 메뉴 --> */}
        <ul className="menus">
          {coffeeList.brewedCoffee.map((coffee) => {
            return <Card name={coffee.name} imgUrl={coffee.imgUrl} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default List;
