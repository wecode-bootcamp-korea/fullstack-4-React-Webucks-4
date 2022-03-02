import React, { useState, useEffect } from "react";
import TopsNav from "../TopsNav/TopsNav";
import { Link } from "react-router-dom";
import NewComment from "./NewComment";
import NewCommentClass from "./NewCommentClass";
import Comment from "./Comment";
import "./Detail.scss";

function Detail() {
  const [heart, setHeart] = React.useState("fa-regular fa-heart");
  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart("fa-solid fa-heart")
      : setHeart("fa-regular fa-heart");
  };

  const [commentList, setComment] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/data/COMMENT_Data.json", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, []);

  const [newComment, setNewComment] = useState([]);
  const [newInput, setNewInput] = useState({
    value: "",
  });
  const comment = "test 댓글";

  const [inputComment, setInputComment] = useState("");
  const onCommentChange = (e) => {
    console.log(inputComment);
    setInputComment(e.target.value);
  };

  const getCommentInput = (e) => {
    setNewInput({
      value: e.target.value,
    });
    setNewComment(newInput);
    console.log(newComment);
  };

  return (
    <div>
      <div className="wholePage">
        <TopsNav />
        <h1 className="sectionTitle">콜드 브루</h1>
        <Link to="/list" className="toList">
          <p>홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카</p>
        </Link>
        <div className="containerDetail">
          <section className="detailInfo">
            <img src="/images/leetekwoo/coldbrew (5).jpg" alt="coldbrew5" />
          </section>
          <section className="detailInfo">
            <div className="infoTitle">
              <div className="infoTitles">
                <h2 className="detailH2">화이트 초콜렛 모카</h2>
                <h5 className="detailH5">White Chocolate Mocha</h5>
              </div>
              <i className={heart} onClick={ChangeHeart}></i>
            </div>
            <hr className="boldHr" />
            <p>
              달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
              섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
              부드럽게 어우러진 커피
            </p>
            <hr />
            <div className="nutritionInfo">
              <h4>제품 영양 정보</h4>
              <h4>Tall(톨) / 355ml (12 fl oz)</h4>
            </div>
            <hr />
            <div className="nutritionInfo">
              <div className="nutritionOuterwrapper">
                <div className="nutritionWrapper">
                  <p>1회 지공량 (kcal)</p>
                  <p>포화지방 (g)</p>
                  <p>단백질 (g)</p>
                </div>
                <div className="nutritionWrapper">
                  <p>345</p>
                  <p>11</p>
                  <p>11</p>
                </div>
              </div>
              <div className="centerLine"></div>
              <div className="nutritionOuterwrapper">
                <div className="nutritionWrapper">
                  <p>나트륨 (mg)</p>
                  <p>당류 (g)</p>
                  <p>카페인 (mg)</p>
                </div>
                <div className="nutritionWrapper">
                  <p>150</p>
                  <p>35</p>
                  <p>75</p>
                </div>
              </div>
            </div>
            <p className="allergicInfo">알레르기 유발 요인 : 우유</p>
            <div className="review">
              <h4>리뷰</h4>
              <hr />
              <div className="commentArea" id="commentArea">
                {commentList.map((comment) => {
                  return (
                    <Comment
                      name={comment.userName}
                      content={comment.content}
                      key={comment.id}
                    />
                  );
                })}
                <Comment name={1} content={"121"} key={1} />
                {newComment.map((comment) => {
                  return <Comment content={comment.value} />;
                })}
                <form onClick={getCommentInput}>
                  <input
                    type="text"
                    className="reviewLog"
                    placeholder="리뷰를 작성해주세요"
                    value={inputComment}
                    onChange={onCommentChange}
                  />
                  <button className="writeReview">작성</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <div className="footerNav">
          <p className="footerTitle">COMPANY</p>
          <p>한눈에 보기</p>
          <p>위벅스 사명</p>
          <p>위벅스 소개</p>
          <p>국내 뉴스룸</p>
          <p>세계의 위벅스</p>
          <p>글로벌 뉴스룸</p>
        </div>
        <div className="footerNav">
          <p className="footerTitle">CORPORATE SALES</p>
          <p>단체 및 기업 구매 안내</p>
        </div>
        <div className="footerNav">
          <p className="footerTitle">PARTNERSHIP</p>
          <p>신규 입점 제의</p>
          <p>협력 고객사 등록 신청</p>
        </div>
        <div className="footerNav">
          <p className="footerTitle">ONLINE COMMUNITY</p>
          <p>페이스북</p>
          <p>트위터</p>
          <p>유튜브</p>
          <p>블로그</p>
          <p>인스타그램</p>
        </div>
        <div className="footerNav">
          <p className="footerTitle">RECRUIT</p>
          <p>채용 소개</p>
          <p>채용 지원하기</p>
        </div>
        <div className="footerNav">
          <p className="footerTitle">WEBUCKS</p>
        </div>
      </footer>
    </div>
  );
}

export default Detail;
