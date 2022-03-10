import React, { useState } from "react";
import card from "./Card.module.scss";

const Card = ({ name, imageURL, onClick }) => {
  return (
    <div className={card.ProductCard}>
      <div className={card.imageWrap}>
        <img className={card.img} src={imageURL} alt={name} onClick={onClick} />
      </div>
      <p className={card.p}>
        {name}{" "}
        <i
          className={"fa-regular fa-heart"}
          onClick={(e) => {
            e.target.className.includes("regular")
              ? (e.target.className = `fa-solid fa-heart ${card.fa}`)
              : (e.target.className = "fa-regular fa-heart");
          }}
        ></i>
      </p>
    </div>
  );
};

export default Card;
