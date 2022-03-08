import React, { useState } from "react";
import detail from "./Detail.module.scss";

const Comment = ({ name, content, onClick }) => {
  const [heart, setHeart] = useState("fa-regular fa-heart");

  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart(`fa-solid fa-heart ${detail.fa}`)
      : setHeart("fa-regular fa-heart");
  };

  return (
    <div>
      <p>
        <strong>{name}</strong> {content}{" "}
        <i className={heart} onClick={ChangeHeart}></i>
        <button style={{ all: "unset" }} onClick={onClick}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </p>
    </div>
  );
};

export default Comment;
