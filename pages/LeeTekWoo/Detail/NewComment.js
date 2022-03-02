// import React, { useState } from "react";
import React, { useState } from "react";

const NewComment = () => {
  const CommentInput = () => {
    return (
      <form>
        {/* <input
          type="text"
          className="reviewID"
          placeholder="ID"
          value={inputId}
          onChange={onIdChange}
        /> */}
        <input
          type="text"
          className="reviewLog"
          placeholder="리뷰를 작성해주세요"
          value={inputComment}
          onChange={onCommentChange}
        />
        <button className="writeReview">작성</button>
      </form>
    );
  };

  const [newComment, setNewComment] = useState([]);

  const [inputComment, setInputComment] = useState("");
  const [inputId, setInputId] = useState("");

  const onCommentChange = (e) => {
    setInputComment(e.target.value);
    console.log(inputComment);
  };

  const onIdChange = (e) => {
    setInputId(e.target.value);
    console.log(inputId);
  };

  return <CommentInput />;
};

export default NewComment;
