import React from "react";

const Comment = ({ name, content, onClick }) => {
  const [heart, setHeart] = React.useState("fa-regular fa-heart");
  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart("fa-solid fa-heart")
      : setHeart("fa-regular fa-heart");
  };

  return (
    <div>
      <p>
        <strong>{name}</strong> {content}{" "}
        <i className={heart} onClick={ChangeHeart}></i>
        <i className="fa-solid fa-xmark" onClick={onClick}></i>
      </p>
    </div>
  );
};

export default Comment;
