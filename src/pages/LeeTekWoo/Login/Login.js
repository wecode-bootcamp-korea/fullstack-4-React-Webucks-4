import React, { useEffect, useState } from "react";
import login from "./Login.module.scss";
import "../../../styles/variables.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [idValue, setidValue] = useState("");
  const [pwValue, setpwValue] = useState("");
  const [pwType, setPwType] = useState("password");

  // ID & PW 핸들러

  // useMemo 사용? 모르겠음
  // 로그인 조건 정규식

  const emailSpell =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwRegexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,}$/;

  // 비밀번호 타입 변환 이벤트 함수
  const pwTypeChange = () => {
    pwType === "password" ? setPwType("text") : setPwType("password");
  };

  const goToList = (e) => {
    e.preventDefault();
    if (emailSpell.test(idValue) && pwRegexp.test(pwValue)) {
      // "POST" 메서드로 서버에 입력한 로그인 id, pw 정보 보내기
      // fetch("http://52.79.143.176:8000/users/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: idValue,
      //     password: pwValue,
      //   }),
      // })
      //   .then((response) => response.json())
      //   .then((result) => console.log("결과: ", result));
      navigate("/tekwoo/coffee");
    }
  };

  const goToSignup = () => {
    navigate("/");
  };

  return (
    <div className={login.bodyLogin}>
      <div className={login.backgroundLogin}>
        <section className={login.containerLogin}>
          <img
            className={login.img}
            src="/images/leetekwoo/webucksLogo.jpg"
            alt="logo"
          />
          <form className={login.form}>
            <input
              type="text"
              className={emailSpell.test(idValue) ? login.InputOn : login.Input}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              maxLength="50"
              onChange={(e) => setidValue(e.target.value)}
              value={idValue}
              title="올바른 이메일 형식을 입력하시오"
            />
            <input
              type={pwType}
              className={pwRegexp.test(pwValue) ? login.InputOn : login.Input}
              placeholder="비밀번호"
              maxLength="24"
              onChange={(e) => setpwValue(e.target.value)}
              value={pwValue}
              title="특수문자, 숫자, 대문자를 포함하여 패스워드를 입력하시오."
            />
            <i
              className={"fa-regular fa-eye"}
              onClick={(e) => {
                e.target.className.includes("slash")
                  ? (e.target.className = "fa-regular fa-eye")
                  : (e.target.className = "fa-regular fa-eye-slash");
                pwTypeChange();
              }}
            ></i>
            <button
              className={`${login.loginButton} ${
                emailSpell.test(idValue) && pwRegexp.test(pwValue)
                  ? login.On
                  : ""
              }`}
              onClick={goToList}
              disabled={
                emailSpell.test(idValue) && pwRegexp.test(pwValue)
                  ? false
                  : true
              }
            >
              로그인
            </button>
            <div className={login.searchPw} onClick={goToSignup}>
              비밀번호를 잊으셨나요?
            </div>
          </form>
          <div className={login.signUp}>
            <p>
              계정이 없으신가요?
              <span
                className={login.span}
                onClick={() => navigate("/signup-tekwoo")}
              >
                가입하기
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
