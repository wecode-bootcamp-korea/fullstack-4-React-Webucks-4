import React, { useState } from "react";
import "./Card.scss";

const Card = ({ name, imageURL, onClick }) => {
  const [heart, setHeart] = React.useState("fa-regular fa-heart");
  const colorNone = { color: "#000000" };
  const colorRed = { color: "#be0a0a" };
  const [color, setColor] = useState(colorNone);

  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart("fa-solid fa-heart")
      : setHeart("fa-regular fa-heart");
    heart.includes("regular") ? setColor(colorRed) : setColor(colorNone);
  };
  return (
    <div className="ProductCard">
      <div className="imageWrap">
        <img src={imageURL} alt={name} onClick={onClick} />
      </div>
      <p>
        {name} <i className={heart} onClick={ChangeHeart} style={color}></i>
      </p>
    </div>
  );
};

export default Card;
