import React, { useState } from "react";
import card from "./Card.module.scss";

const Card = ({ name, imageURL, onClick }) => {
  const [heart, setHeart] = useState("fa-regular fa-heart");

  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart(`fa-solid fa-heart ${card.fa}`)
      : setHeart("fa-regular fa-heart");
  };
  return (
    <div className={card.ProductCard}>
      <div className={card.imageWrap}>
        <img src={imageURL} alt={name} onClick={onClick} />
      </div>
      <p>
        {name} <i className={heart} onClick={ChangeHeart}></i>
      </p>
    </div>
  );
};

export default Card;
