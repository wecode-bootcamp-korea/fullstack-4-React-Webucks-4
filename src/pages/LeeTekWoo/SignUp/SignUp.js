import React, { useEffect, useState } from "react";
import signup from "./SignUp.module.scss";
import "../../../styles/variables.scss";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [idValue, setidValue] = useState("");
  const [pwValue, setpwValue] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwType, setPwType] = useState("password");

  //
  const sendAccount = () => {
    // fetch("http://52.79.143.176:8000/users/signup", {
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
    navigate("/login-tekwoo");
  };

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

  const goToLogin = () => {
    navigate("/login-tekwoo");
  };

  return (
    <div className={signup.bodyLogin}>
      <div className={signup.backgroundLogin}>
        <section className={signup.containerLogin}>
          <img
            className={signup.logo}
            src="/images/leetekwoo/webucksLogo.jpg"
            alt="logo"
          />
          <div className={signup.toLogin}>
            친구들의 사진과 동영상을 보려면{" "}
            <span className={signup.span} onClick={goToLogin}>
              로그인
            </span>
            하세요.
          </div>
          <div className={signup.splitLine}>
            <hr className={signup.hr} />
            <h3 className={signup.h3}>또는</h3>
            <hr className={signup.hr} />
          </div>
          <form className={signup.containLogin}>
            <input
              type="text"
              className={
                emailSpell.test(idValue) ? signup.InputOn : signup.Input
              }
              placeholder="전화번호, 사용자 이름 또는 이메일"
              maxLength="50"
              onChange={(e) => setidValue(e.target.value)}
              value={idValue}
              title="올바른 이메일 형식을 입력하시오"
            />
            <input
              type="text"
              className={2 < name.length ? signup.InputOn : signup.Input}
              placeholder="성명"
              maxLength="20"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <input
              type="text"
              className={4 <= nickname.length ? signup.InputOn : signup.Input}
              placeholder="사용자 이름"
              maxLength="15"
              onChange={(e) => setNickname(e.target.value)}
              value={nickname}
            />
            <input
              type={pwType}
              className={pwRegexp.test(pwValue) ? signup.InputOn : signup.Input}
              placeholder="비밀번호"
              maxLength="24"
              onChange={(e) => setpwValue(e.target.value)}
              onClick={(e) => console.log(e.target.parentNode)}
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
              className={
                emailSpell.test(idValue) && pwRegexp.test(pwValue)
                  ? `${signup.loginButton} ${signup.On}`
                  : signup.loginButton
              }
              onClick={sendAccount}
              disabled={
                emailSpell.test(idValue) && pwRegexp.test(pwValue)
                  ? false
                  : true
              }
            >
              가입하기
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
