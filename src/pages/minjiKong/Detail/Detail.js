import "./Detail.scss";

function Detail() {
  return (
    <div className="Detail">
      <div className="menu-type">콜드 브루</div>
      <div className="menu-state">
        홈 {">"} MENU {">"} 음료 {">"} 에스프레소 {">"} 화이트 초콜릿 모카
      </div>
      <div className="section-wrapper">
        <section className="menu-img">
          <img src="/images/BrewedCoffee.jpg" alt="화이트 초콜릿 모카" />
        </section>
        <div className="menu-review-wrapper">
          <section className="menu-section">
            <div className="menu-title">
              <div className="menu-name">
                <p>화이트 초콜릿 모카</p>
                <span>White Chocolate Mocha</span>
              </div>
              <i class="fa-regular fa-heart"></i>
            </div>
            <p className="menu-explain">
              달콤하고 부드러운 화이트 초콜릿 시럽과 에스프레소를 스팀 밀크와
              섞어 휘핑크림으로 마무리한 음료로 달콤함과 강렬한 에스프레소가
              부드럽게 어우러진 커피
            </p>
            <div className="menu-info">
              <table>
                <tr>
                  <td colSpan="2">제품 영양 정보</td>
                  <td colSpan="2">Tall(톨) / 355ml (12 fl oz)</td>
                </tr>
                <tr>
                  <td>1회 제공량 (kcal)</td>
                  <td>345</td>
                  <td>나트륨 (mg)</td>
                  <td>150</td>
                </tr>
                <tr>
                  <td>포화지방 (g)</td>
                  <td>11</td>
                  <td>당류 (g)</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>단백질 (g)</td>
                  <td>11</td>
                  <td>카페인 (mg)</td>
                  <td>75</td>
                </tr>
                {/* <tr colSpan="4">알레르기 유발 요인 : 우유</tr> */}
              </table>
              <div className="menu-allergy">알레르기 유발 요인 : 우유</div>
            </div>
          </section>
          <section className="review-section">
            <div className="review-title">리뷰</div>
            <div className="review-comment">
              <div className="comment">
                <span className="comment-id">coffee_lover</span>
                <span className="commnet-text">너무 맛있어요!</span>
              </div>
              <div className="comment">
                <span className="comment-id">CHOCO7</span>
                <span className="commnet-text">
                  오늘도 화이트 초콜릿 모카를 마시러 갑니다.
                </span>
              </div>
              <div className="comment">
                <span className="comment-id">legend_dev</span>
                <span className="commnet-text">
                  진짜 화이트 초콜릿 모카는 전설이다. 진짜 화이트 초콜릿 모카는
                  전설이다. 진짜 화이트 초콜릿 모카는 전설이다.
                </span>
              </div>
            </div>
            <input
              className="comment-input"
              placeholder="리뷰를 입력해주세요."
            />
          </section>
        </div>
      </div>
      <footer className="footer">
        <ul className="ul-wrapper">
          <ul>
            <li>COMPANY</li>
            <li>한눈에 보기</li>
            <li>스타벅스 사명</li>
            <li>스타벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 스타벅스</li>
            <li>글로벌 뉴스룸</li>
          </ul>
          <ul>
            <li>CORPORATE SALES</li>
            <li>단체 및 기업 구매 안내</li>
          </ul>
          <ul>
            <li>PARTNERSHIP</li>
            <li>신규 입점 제외</li>
            <li>협력 고객사 등록 신청</li>
          </ul>
          <ul>
            <li>ONLINE COMMUNITY</li>
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>
          <ul>
            <li>RECRUIT</li>
            <li>제품 소개</li>
            <li>제품 지원하기</li>
          </ul>
          <ul>WEBUCKS</ul>
        </ul>
      </footer>
    </div>
  );
}
export default Detail;
