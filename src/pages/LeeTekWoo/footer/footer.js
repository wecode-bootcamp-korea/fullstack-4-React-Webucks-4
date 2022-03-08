import React from "react";
import style from "./footer.module.scss";

function footer() {
  return (
    <footer>
      <div>
        <div className={style.footerTitle} id={style.mobileFooter}>
          <p>COMPANY</p>
          <p>한눈에 보기</p>
          <p>위벅스 사명</p>
          <p>위벅스 소개</p>
          <p>국내 뉴스룸</p>
          <p>세계의 위벅스</p>
          <p>글로벌 뉴스룸</p>
        </div>
      </div>
      <div className={style.footerNav}>
        <p className={style.footerTitle}>CORPORATE SALES</p>
        <p>단체 및 기업 구매 안내</p>
      </div>
      <div className={style.footerNav}>
        <p className={style.footerTitle}>PARTNERSHIP</p>
        <p>신규 입점 제의</p>
        <p>협력 고객사 등록 신청</p>
      </div>
      <div className={style.footerNav}>
        <p className={style.footerTitle}>ONLINE COMMUNITY</p>
        <p>페이스북</p>
        <p>트위터</p>
        <p>유튜브</p>
        <p>블로그</p>
        <p>인스타그램</p>
      </div>
      <div className={style.footerNav}>
        <p className={style.footerTitle}>RECRUIT</p>
        <p>채용 소개</p>
        <p>채용 지원하기</p>
      </div>
      <div className={style.footerNav}>
        <p className={style.footerTitle}>WEBUCKS</p>
      </div>
    </footer>
  );
}

export default footer;
