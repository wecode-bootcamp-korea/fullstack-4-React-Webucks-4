import React, { useState, useEffect } from "react";
import TopsNav from "../TopsNav/TopsNav";
import { Link, useNavigate } from "react-router-dom";
import Comment from "./Comment";
import "./Detail.scss";
import NewComment from "./NewComment";

function Detail() {
  const navigate = useNavigate();
  // const match = useMatch();

  // 디테일 페이지 Mock 데이터 받아오기
  // const [detailInfo, setDetailInfo] = useState({
  //   id: 0,
  //   type: "",
  //   name: "",
  //   imgUrl: "/loading.jpg",
  //   englishName: "",
  //   description: "신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피",
  //   size: "",
  //   nutrition: [],
  //   allergyInfo: "없음",
  // });

  // useEffect(() => {
  //   fetch("http://localhost:3000/data/coffeeList.json", {
  //     method: "GET",
  //   })
  //     .then((res) => res.json())

  //     .then((data) => {
  //       data;
  //     });
  // }, []);

  const [heart, setHeart] = React.useState("fa-regular fa-heart");
  const ChangeHeart = () => {
    heart.includes("regular")
      ? setHeart("fa-solid fa-heart")
      : setHeart("fa-regular fa-heart");
  };

  // 댓글 리스트 Mock 데이터 받아오기
  const [commentList, setComment] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/data/leetekwoo/COMMENT_Data.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setComment(data);
      });
  }, []);

  // 댓글란 하단에 새 댓글 추가하기
  // map을 이용해 컴포넌트를 렌더링하기 위한 빈 배열
  const [enters, setEnters] = useState([]);

  // 댓글창에 입력된 문자를 가져오는 state
  const [inputDataC, setInputDataC] = useState("");

  // 위 배열에 들어가기 전 데이터 객체

  const [newInput, setNewInput] = useState({
    value: "",
  });

  // 댓글창에 문자가 입력될 때마다 그 문자를 state로 가져오는 함수
  const onCommentChange = (e) => {
    setInputDataC(e.target.value);
    setNewInput({
      value: e.target.value,
      // id: enters.length + 1,
      // 객체 내부 id 값은 전체 배열의 길이 + 1 로
      // 삭제 기능 구현 시 id 값 겹침 우려있음
    });
    // 댓글 창의 value들을 inputDataC에 문자가 바뀔 때마다 할당
  };
  // inputDataC에 담긴 댓글 value를 빈 객체로 옮기고, 이 객체를 다시 배열에 넣어주기.
  const getCommentInput = (e) => {
    e.preventDefault(); // form 태그 새로고침 발생 X
    setEnters(enters.concat(newInput)); // 배열에 객체 추가.
    console.log(enters);
    setInputDataC("");
  };

  // 삭제 기능 구현
  const deleteComment = (e) => {
    // x 버튼을 클릭 시
    // 전체 배열에서 그 id를 갖는 객체만 삭제
    // 컴포넌트 이전에, 배열에 들어가기 이전에

    console.log(e);
    setEnters(enters.concat(newInput));
  };

  return (
    <div>
      <div className="wholePage">
        <TopsNav />
        <h1 className="sectionTitle">콜드 브루</h1>
        <p onClick={navigate("/coffee")}>
          홈 > MENU > 음료 > 에스프레소 > 화이트 초콜릿 모카
          {/* 이름 바뀌어야함 */}
        </p>

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
                {enters.map((comment) => {
                  return (
                    <Comment content={comment.value} onClick={deleteComment} />
                  );
                })}
                <form onSubmit={getCommentInput}>
                  <input
                    type="text"
                    className="reviewLog"
                    placeholder="리뷰를 작성해주세요"
                    value={inputDataC}
                    onChange={onCommentChange}
                  />
                  <button className="writeReview">작성</button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/*  porps return 끝 */}
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
