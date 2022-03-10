import React, { useState } from "react";
import detail from "./Detail.module.scss";

const Comment = ({ name, content, onClick }) => {
  return (
    <div>
      <p>
        <strong>{name}</strong> {content}{" "}
        <i
          className={"fa-regular fa-heart"}
          onClick={(e) => {
            e.target.className === "fa-regular fa-heart"
              ? (e.target.className = `fa-solid fa-heart ${detail.fa}`)
              : (e.target.className = "fa-regular fa-heart");
          }}
        ></i>
        <button style={{ all: "unset" }} onClick={onClick}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </p>
    </div>
  );
};

export default Comment;
