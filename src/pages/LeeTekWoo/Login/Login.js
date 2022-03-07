import React, { useEffect, useState, useMemo } from "react";
import login from "./Login.module.scss";
import "../../../styles/variables.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [logActive, setLog] = useState(false);
  const [btnOn, setBtn] = useState(true);
  const [idValue, setidValue] = useState("");
  const [pwValue, setpwValue] = useState("");
  const [pwType, setPwType] = useState("password");
  const [eye, setEye] = useState("fa-regular fa-eye");

  // function clickValidation() {
  //   idValue.includes("@") && 4 < pwValue.length
  //     ? setLog((prev) => !prev)
  //     : setLog((prev) => prev);
  // } customHook으로 바꾸기

  // ID & PW 핸들러
  const handleIdInput = (e) => {
    setidValue(e.target.value);
  };

  const handlePwInput = (e) => {
    setpwValue(e.target.value);
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
    loginCheck ? setLog(true) : setLog(false);
  }, [loginCheck]);

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

  const goToList = (e) => {
    e.preventDefault();
    if (logActive) {
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
          <img src="/images/leetekwoo/webucksLogo.jpg" alt="logo" />
          <form className={login.containLogin}>
            {/* {onKeyUp={SetLogin}} */}
            <input
              type="text"
              className={emailSpell.test(idValue) ? login.InputOn : login.Input}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              maxLength="50"
              onChange={handleIdInput}
              value={idValue}
              title="올바른 이메일 형식을 입력하시오"
            />
            <input
              type={pwType}
              className={pwRegexp.test(pwValue) ? login.InputOn : login.Input}
              placeholder="비밀번호"
              maxLength="24"
              onChange={handlePwInput}
              value={pwValue}
              title="특수문자, 숫자, 대문자를 포함하여 패스워드를 입력하시오."
            />
            <i className={eye} onClick={pwViewHide}></i>
            <button
              className={logActive ? login.loginButtonOn : login.loginButton}
              onClick={goToList}
              disabled={btnOn}
            >
              로그인
            </button>
            <div className={login.searchPw} onClick={goToSignup}>
              비밀번호를 잊으셨나요?
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
