// import React, { useState } from "react";
import React, { Component, useState } from "react";

class NewCommentClass extends Component {
  constructor() {
    super();
    this.state = {
      value: "",
      commentList: [],
    };

    // const [inputComment, setInputComment] = useState("");
    // const [inputId, setInputId] = useState("");

    // const onCommentChange = (e) => {
    //   setInputComment(e.target.value);
    //   console.log(inputComment);
    // };
    this.onCommentChange = (e) => {
      this.setState({ value: e.target.value });
    };

    this.addComment = () => {
      this.setState({
        commentList: this.state.commentList.concat([this.state.value]),
        value: "",
      });
    };
    // const onIdChange = (e) => {
    //   setInputId(e.target.value);
    //   console.log(inputId);
    // };
  }
  render() {
    return (
      <form onSubmit={this.addComment}>
        {/* <input
        type="text"
        className="reviewID"
        placeholder="ID"
        value={inputId}
        onChange={onIdChange}
      /> */}
        <div>
          {this.state.commentList.map((comment, index) => {
            <p key={index}>{comment}</p>;
          })}
        </div>
        <input
          type="text"
          className="reviewLog"
          placeholder="리뷰를 작성해주세요"
          onChange={this.onCommentChange}
        />
        <button className="writeReview">작성</button>
      </form>
    );
  }
}

export default NewCommentClass;
