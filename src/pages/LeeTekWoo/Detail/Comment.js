import React, { useState } from "react";

const Comment = ({ name, content, onClick }) => {
  const [heart, setHeart] = useState("fa-regular fa-heart");
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
    <div>
      <p>
        <strong>{name}</strong> {content}{" "}
        <i className={heart} onClick={ChangeHeart} style={color}></i>
        <button style={{ all: "unset" }} onClick={onClick}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </p>
    </div>
  );
};

export default Comment;
