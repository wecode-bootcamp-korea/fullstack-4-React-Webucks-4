import React, { useEffect, useState, useMemo } from "react";
import signup from "./SignUp.module.scss";
import "../../../styles/variables.scss";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [logActive, setLog] = useState(false);
  const [btnOn, setBtn] = useState(true);
  const [idValue, setidValue] = useState("");
  const [pwValue, setpwValue] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [pwType, setPwType] = useState("password");
  const [eye, setEye] = useState("fa-regular fa-eye");

  //
  const sendAccout = () => {
    fetch("http://52.79.143.176:8000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과: ", result));
    navigate("/login-tekwoo");
  };

  // useMemo 사용? 모르겠음
  // 로그인 조건 정규식

  const emailSpell =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwRegexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,}$/;

  const loginCheck = useMemo(() => {
    if (emailSpell.test(idValue) && pwRegexp.test(pwValue)) {
      return true;
    } else {
      return false;
    }
  }, [idValue, pwValue]);

  useEffect(() => {
    // idValue, pwValue 바뀌는데, 안바뀐 부분은 저장 useMemo 활용
    loginCheck && 4 <= nickname.length && 2 < name.length
      ? setLog(true)
      : setLog(false);
  }, [loginCheck, nickname, name]);

  useEffect(() => {
    logActive ? setBtn((prev) => !prev) : setBtn((prev) => prev);
  }, [logActive]);

  // 비밀번호 타입 변환 이벤트 함수
  const pwTypeChange = () => {
    pwType === "password" ? setPwType("text") : setPwType("password");
  };

  // 비밀번호 타입 변환 버튼 on/off
  const pwViewHide = (e) => {
    e.target.className.includes("fa-eye-slash")
      ? setEye("fa-regular fa-eye")
      : setEye("fa-regular fa-eye-slash");
    pwTypeChange();
  };

  const goToLogin = () => {
    navigate("/login-tekwoo");
  };

  return (
    <div className={signup.bodyLogin}>
      <div className={signup.backgroundLogin}>
        <section className={signup.containerLogin}>
          <img src="/images/leetekwoo/webucksLogo.jpg" alt="logo" />
          <div className={signup.toLogin}>
            친구들의 사진과 동영상을 보려면{" "}
            <span onClick={goToLogin}>로그인</span>하세요.
          </div>
          <div className={signup.splitLine}>
            <hr />
            <h3>또는</h3>
            <hr />
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
              value={pwValue}
              title="특수문자, 숫자, 대문자를 포함하여 패스워드를 입력하시오."
            />
            <i className={eye} onClick={pwViewHide}></i>
            <button
              className={logActive ? signup.loginButtonOn : signup.loginButton}
              onClick={sendAccout}
              disabled={btnOn}
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
