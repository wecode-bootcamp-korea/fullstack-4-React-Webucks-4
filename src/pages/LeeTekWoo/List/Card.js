import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ name, imageURL }) => {
  const [heart, setHeart] = React.useState("fa-regular fa-heart");
  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart("fa-solid fa-heart")
      : setHeart("fa-regular fa-heart");
  };
  return (
    <div className="ProductCard">
      <div className="imageWrap">
        <Link to="/detail">
          <img src={imageURL} alt={name} />
        </Link>
      </div>
      <p>
        {name} <i className={heart} onClick={ChangeHeart}></i>
      </p>
    </div>
  );
};

export default Card;
