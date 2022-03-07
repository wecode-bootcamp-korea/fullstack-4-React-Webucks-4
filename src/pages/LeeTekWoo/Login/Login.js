import React, { useEffect } from "react";
import login from "./Login.module.scss";
import "../../../styles/variables.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [logActive, setLog] = React.useState(false);
  const [idValue, setidValue] = React.useState("");
  const [pwValue, setpwValue] = React.useState("");
  const [pwType, setPwType] = React.useState("password");
  const [eye, setEye] = React.useState("fa-regular fa-eye");

  // 로그인 조건 정규식
  const emailSpell =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const pwRegexp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{7,}$/;

  // Style State
  const btnOff = {
    opacity: 0.5,
    cursor: "initial",
  };
  const btnOn = {
    opacity: 1,
    cursor: "pointer",
  };

  const borderG = {
    border: "1px solid rgb(3, 163, 16)",
  };
  const borderNone = {
    border: "1px solid rgb(221, 221, 221)",
  };
  const [borderIDcolor, setBorderID] = React.useState(borderNone);
  const [borderPWcolor, setBorderPW] = React.useState(borderNone);
  const [Btn, setBtn] = React.useState(btnOff);

  const handleIdInput = (e) => {
    setidValue(e.target.value);
  };

  const handlePwInput = (e) => {
    setpwValue(e.target.value);
  };

  const borderID = (e) => {
    emailSpell.test(e.target.value)
      ? setBorderID(borderG)
      : setBorderID(borderNone);
  };
  const borderPW = (e) => {
    pwRegexp.test(e.target.value)
      ? setBorderPW(borderG)
      : setBorderPW(borderNone);
  };

  useEffect(() => {
    console.log("useEffect 작동", "idValue는" + idValue, "pwValue는" + pwValue);
    if (emailSpell.test(idValue) && pwRegexp.test(pwValue)) {
      setBtn(btnOn);
      setLog(true);
    } else {
      setBtn(btnOff);
      setLog(false);
    }
  }, [borderIDcolor, borderPWcolor]);

  // 비밀번호 타입 변환 이벤트 함수
  const pwTypeChange = () => {
    if (pwType === "password") {
      setPwType("text");
    } else {
      setPwType("password");
    }
  };

  // 비밀번호 타입 변환 버튼 on/off
  const pwViewHide = (e) => {
    e.target.className.includes("fa-eye-slash")
      ? setEye("fa-regular fa-eye")
      : setEye("fa-regular fa-eye-slash");
    pwTypeChange();
  };

  const goToList = () => {
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
              className={login.Input}
              placeholder="전화번호, 사용자 이름 또는 이메일"
              maxLength="50"
              onChange={handleIdInput}
              onKeyUp={borderID}
              style={borderIDcolor}
              value={idValue}
              title="올바른 이메일 형식을 입력하시오"
            />
            <input
              type={pwType}
              className={login.Input}
              placeholder="비밀번호"
              maxLength="24"
              onChange={handlePwInput}
              onKeyUp={borderPW}
              style={borderPWcolor}
              value={pwValue}
              title="특수문자, 숫자, 대문자를 포함하여 패스워드를 입력하시오."
            />
            <i className={eye} onClick={pwViewHide}></i>
            <button
              className={login.loginButton}
              style={Btn}
              onClick={goToList}
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
