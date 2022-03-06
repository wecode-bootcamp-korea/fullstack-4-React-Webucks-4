import React, { useState, useEffect } from "react";
import styles from'./List.module.scss'


import TopNav from "../components/TopNav/TopNav";
import CoffeeCard from "../components/CoffeeCard/CoffeeCard";

const List = () => {
    const [coffeeList, setCoffeeList] = useState({
"coldBrewCoffee":[],"brewedCoffee":[]})

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
  <div className={styles["master-container"]}>
    <TopNav />
  <article className={styles["coffee-list-title"]}>
      <h1>콜드 부루 커피</h1>
      <i className="fas fa-coffee"></i>
      <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
  </article>

  <ul className={styles["coffee-list-wrapper"]}>
        {
        coffeeList.coldBrewCoffee.map(coffee =>{
          return (<CoffeeCard coffeeName={coffee.name} imageUrl={coffee.imgUrl} id={coffee.id} key={coffee.id} />)
        })}
  </ul>


  <article className={styles["coffee-list-title"]}>
      <h1>브루드 커피</h1>
      <i className="fas fa-coffee"></i>
      <h2>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</h2>
  </article>
  
  <ul className={styles["coffee-list-wrapper"]}>
    {
    coffeeList.brewedCoffee.map(coffee =>{
        return (<CoffeeCard coffeeName={coffee.name} imageUrl={coffee.imgUrl} id={coffee.id} key={coffee.id}  />)
    })}
  </ul>
</div>);
};

export default List;