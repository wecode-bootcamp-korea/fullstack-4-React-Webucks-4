import React from "react";
import { useNavigate } from "react-router-dom";
import styles from'./CoffeeCard.module.scss'

const CoffeeCard = (props) => {
  let navigate = useNavigate();

  return (<li   onClick={() => {
    navigate(`/detail-gyeonghun/#${props.id}`, { state: {id : props.id} });
  }} style={{cursor:"pointer"}} >
  <div className={styles["coffee-image-box"]}>
      <img className={styles["coffee-image"]} src={props.imageUrl} alt={props.coffeeName} />
  </div>
  <h3 className={styles["coffee-name"]}>
      {props.coffeeName}
  </h3>
</li>);
};

export default CoffeeCard;
