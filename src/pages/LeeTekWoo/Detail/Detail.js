import React, { useState, useEffect } from "react";
import TopsNav from "../TopsNav/TopsNav";
import { useNavigate, useParams } from "react-router-dom";
import Comment from "./Comment";
import detail from "./Detail.module.scss";
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

  // 댓글 리스트 Mock 데이터 받아오기

  // 댓글란 하단에 새 댓글 추가하기
  // map을 이용해 컴포넌트를 렌더링하기 위한 빈 배열
  const [enters, setEnters] = useState([]);

  // 댓글창에 입력된 문자를 가져오는 state
  const [inputDataC, setInputDataC] = useState("");

  // 댓글창에 입력된 ID를 가져오는 State
  const [inputDataId, setInputDataId] = useState("");

  // 위 배열에 들어가기 전 데이터 객체

  const [newInput, setNewInput] = useState({
    value: "",
    name: "",
    id: 0,
  });

  const [newCommentKey, setNewCommentKey] = useState(0);

  useEffect(() => {
    setNewInput({
      value: inputDataC,
      name: inputDataId,
      id: newCommentKey,
    });
  }, [inputDataC, inputDataId]);

  // form submit 시 빈 배열 enters에 컴포넌트 추가
  const getCommentInput = (e) => {
    if (inputDataC === "" || inputDataId === "") {
      e.preventDefault(); // form 태그 새로고침 발생 X
      return null;
    }
    e.preventDefault();
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

  return (
    <div>
      <div className={detail.wholePage}>
        <TopsNav />
        <h1 className={detail.sectionTitle}>{detailInfo.name}</h1>
        <p className={detail.toList} onClick={() => navigate("/tekwoo/coffee")}>
          {`홈 > MENU > 음료 > ${detailInfo.name}`}
        </p>

        <div className={detail.containerDetail}>
          <section className={detail.detailInfo}>
            <img src={`/images/${detailInfo.id}.jpg`} alt={detailInfo.name} />
          </section>
          <section className={detail.detailInfo}>
            <div className={detail.infoTitle}>
              <div className={detail.infoTitles}>
                <h2 className={detail.detailH2}>{detailInfo.name}</h2>
                <h5 className={detail.detailH5}>{detailInfo.englishName}</h5>
              </div>
              <i
                className={"fa-regular fa-heart"}
                onClick={(e) => {
                  e.target.className.includes("regular")
                    ? (e.target.className = `fa-solid fa-heart ${detail.fa}`)
                    : (e.target.className = "fa-regular fa-heart");
                }}
              ></i>
            </div>
            <hr className={detail.boldHr} />
            <p>{detailInfo.description}</p>
            <hr />
            <div className={detail.nutritionInfo}>
              <h4>제품 영양 정보</h4>
              <h4>{detailInfo.size}</h4>
            </div>
            <hr />
            <div className={detail.nutritionInfo}>
              <div className={detail.nutritionOuterwrapper}>
                <div className={detail.nutritionWrapper}>
                  <p>1회 지공량 (kcal)</p>
                  <p>포화지방 (g)</p>
                  <p>단백질 (g)</p>
                </div>
                <div className={detail.nutritionWrapper}>
                  <p>{detailInfo.nutrition[0].value}</p>
                  <p>{detailInfo.nutrition[1].value}</p>
                  <p>{detailInfo.nutrition[2].value}</p>
                </div>
              </div>
              <div className={detail.centerLine}></div>
              <div className={detail.nutritionOuterwrapper}>
                <div className={detail.nutritionWrapper}>
                  <p>나트륨 (mg)</p>
                  <p>당류 (g)</p>
                  <p>카페인 (mg)</p>
                </div>
                <div className={detail.nutritionWrapper}>
                  <p>{detailInfo.nutrition[3].value}</p>
                  <p>{detailInfo.nutrition[4].value}</p>
                  <p>{detailInfo.nutrition[5].value}</p>
                </div>
              </div>
            </div>
            <p className={detail.allergicInfo}>
              알레르기 유발 요인 : {detailInfo.allergyInfo}
            </p>
            <div className={detail.review}>
              <h4>리뷰</h4>
              <hr />
              <div className={detail.commentArea} id="commentArea">
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
                    className={detail.reviewID}
                    placeholder="ID"
                    value={inputDataId}
                    onChange={(e) => setInputDataId(e.target.value)}
                  />
                  <input
                    type="text"
                    className={detail.reviewLog}
                    placeholder="리뷰를 작성해주세요"
                    value={inputDataC}
                    onChange={(e) => setInputDataC(e.target.value)}
                  />
                  <button className={detail.writeReview}>작성</button>
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
