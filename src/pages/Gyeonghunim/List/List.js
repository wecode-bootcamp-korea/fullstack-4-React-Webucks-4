import React, { useState, useEffect } from "react";
import './List.scss'


import TopNav from "../components/TopNav";
import CoffeeCard from "../components/CoffeeCard";

const ListGyeonghun = () => {


    const [coffeeList, setCoffeeList] = useState({});

    useEffect(() => {
        fetch('/data/coffeeList.json', {
          method: 'GET' // GET method는 기본값이라서 생략이 가능합니다. 
        })              // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
          .then(res => res.json())
          .then(data => {
            setCoffeeList(data);
          });
      },[])


  return     (
  <div class="master-container">
    <TopNav />
  <article class="coffee-list-title">
      <h1>콜드 부루 커피</h1>
      <i class="fas fa-coffee"></i>
      <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
  </article>

  <ul class="coffee-list-wrapper">
        {coffeeList.coldBrewCoffee.map(coffee =>{
          return (<CoffeeCard coffeeName={coffee.name} imageUrl={coffee.imgUrl} />)
        })}
  </ul>


  <article class="coffee-list-title">
      <h1>브루드 커피</h1>
      <i class="fas fa-coffee"></i>
      <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
  </article>
  
  <ul class="coffee-list-wrapper">
    {coffeeList.brewedCoffee.map(coffee =>{
        return (<CoffeeCard coffeeName={coffee.name} imageUrl={coffee.imgUrl} />)
    })}
  </ul>
</div>);
};

export default ListGyeonghun;