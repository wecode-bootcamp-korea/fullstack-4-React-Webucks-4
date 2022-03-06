import React, { useState, useEffect } from "react";
import TopsNav from "../TopsNav/TopsNav";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";
import "./Detail.scss";
import Footer from "../footer/footer";

function Detail() {
  const navigate = useNavigate();
  const params = useParams();

  // 디테일 페이지 Mock 데이터 받아오기 // 이해 X
  const [detailInfo, setDetailInfo] = useState({
    id: 0,
    type: "",
    name: "",
    imgUrl: "/loading.jpg",
    englishName: "",
    description: "신선하게 브루드(Brewed)되어 원두의 다양함이 살아있는 커피",
    size: "",
    nutrition: [{}, {}, {}, {}, {}, {}],
    allergyInfo: "없음",
  });

  // useEffect + useParams 이해 X
  useEffect(() => {
    fetch(`/data/coffeeDetail/${params.id}.JSON`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setDetailInfo(data);
      });
  });

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
    name: "",
    id: 0,
  });

  const [newCommentKey, setNewCommentKey] = useState(0);
  const [inputDataId, setInputDataId] = useState("");

  // 댓글창에 문자가 입력될 때마다 그 문자를 state로 가져오는 함수
  const onCommentChange = (e) => {
    setInputDataC(e.target.value);
    setNewInput({
      value: e.target.value,
      name: inputDataId,
      id: newCommentKey,
      // id: enters.length + 1,
      // 객체 내부 id 값은 전체 배열의 길이 + 1 로
      // 삭제 기능 구현 시 id 값 겹침 우려있음
      // 이렇게 되면 comment 먼저 작성하고 -> id 입력 시 inputdataid가 업데이트 되지 않은 상태에서 새로운 댓글이 생성됨.
    });
    // 댓글 창의 value들을 inputDataC에 문자가 바뀔 때마다 할당
  };

  const getIdInput = (e) => {
    setInputDataId(e.target.value);
    setNewInput({
      value: inputDataC,
      name: e.target.value,
      id: newCommentKey,
    });
  };

  // form submit 시 빈 배열 enters에 컴포넌트 추가
  const getCommentInput = (e) => {
    if (inputDataC === "" || inputDataId === "") {
      e.preventDefault();
      return null;
    }
    e.preventDefault(); // form 태그 새로고침 발생 X
    setNewCommentKey((prev) => prev + 1);
    setEnters(enters.concat(newInput)); // 배열에 객체 추가.
    setInputDataC(""); // id, 댓글 창 빈칸 만들기
    setInputDataId("");
  };

  // 삭제 기능 구현

  // 새 댓글 삭제
  const deleteComment = (e) => {
    setEnters(enters.filter((comment) => comment.id !== e));
  };

  // 옛날 댓글 삭제
  const jsonComentDelete = (e) => {
    setComment(commentList.filter((comment) => comment.id !== e));
  };

  return (
    <div>
      <div className="wholePage">
        <TopsNav />
        <h1 className="sectionTitle">{detailInfo.name}</h1>
        <p className="toList" onClick={() => navigate("/tekwoo/coffee")}>
          {`홈 > MENU > 음료 > ${detailInfo.name}`}
        </p>

        <div className="containerDetail">
          <section className="detailInfo">
            <img src={`/images/${detailInfo.id}.jpg`} alt={detailInfo.name} />
          </section>
          <section className="detailInfo">
            <div className="infoTitle">
              <div className="infoTitles">
                <h2 className="detailH2">{detailInfo.name}</h2>
                <h5 className="detailH5">{detailInfo.englishName}</h5>
              </div>
              <i className={heart} onClick={ChangeHeart}></i>
            </div>
            <hr className="boldHr" />
            <p>{detailInfo.description}</p>
            <hr />
            <div className="nutritionInfo">
              <h4>제품 영양 정보</h4>
              <h4>{detailInfo.size}</h4>
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
                  <p>{detailInfo.nutrition[0].value}</p>
                  <p>{detailInfo.nutrition[1].value}</p>
                  <p>{detailInfo.nutrition[2].value}</p>
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
                  <p>{detailInfo.nutrition[3].value}</p>
                  <p>{detailInfo.nutrition[4].value}</p>
                  <p>{detailInfo.nutrition[5].value}</p>
                </div>
              </div>
            </div>
            <p className="allergicInfo">
              알레르기 유발 요인 : {detailInfo.allergyInfo}
            </p>
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
                      onClick={() => jsonComentDelete(comment.id)}
                    />
                  );
                })}
                {enters.map((comment) => {
                  return (
                    <Comment
                      content={comment.value}
                      name={comment.name}
                      key={comment.id}
                      onClick={() => deleteComment(comment.id)}
                    />
                  );
                })}
                <form onSubmit={getCommentInput}>
                  <input
                    type="text"
                    className="reviewID"
                    placeholder="ID"
                    value={inputDataId}
                    onChange={getIdInput}
                  />
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
      <Footer />
    </div>
  );
}

export default Detail;
