import React from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [logActive, setLog] = React.useState(false);
  const [idValue, setidValue] = React.useState();
  const [pwValue, setpwValue] = React.useState();
  const [pwType, setPwType] = React.useState("password");
  const btnOff = {
    opacity: 0.5,
    cursor: "initial",
  };
  const btnOn = {
    opacity: 1,
    cursor: "pointer",
  };

  // const borderA = {
  //   display: "inline",
  // };
  // const borderG = {
  //   border: "1px solid #03a310",
  // };
  // const borderR = {
  //   border: "1px solid #bd0707",
  // };

  const [Btn, setBtn] = React.useState(btnOff);
  const [eye, setEye] = React.useState("fa-regular fa-eye");
  // const [border, setBorderColor] = React.useState(borderA);

  const handleIdInput = (e) => {
    setidValue(e.target.value);
  };

  const handlePwInput = (e) => {
    console.log(e.target.value);
    setpwValue(e.target.value);
    console.log(pwValue);
  };

  const setLogin = () => {
    idValue.includes("@") && 5 <= pwValue.length ? setLog(true) : setLog(false);
    idValue.includes("@") && 5 <= pwValue.length
      ? setBtn(btnOn)
      : setBtn(btnOff);
    // idValue.includes("@") && 5 <= pwValue.length ? setBorder() : setBorder();
  };

  // const setBorder = () => {
  //   if (logActive) {
  //     setBorderColor(borderG);
  //   } else {
  //     setBorderColor(borderR);
  //   }
  // };

  const pwTypeChange = () => {
    if (pwType === "password") {
      setPwType("text");
    } else {
      setPwType("password");
    }
  };

  const pwViewHide = (e) => {
    if (e.target.className === "fa-regular fa-eye") {
      setEye("fa-regular fa-eye-slash");
      pwTypeChange();
    } else {
      setEye("fa-regular fa-eye");
      pwTypeChange();
    }
  };

  const goToList = () => {
    if (logActive) {
      navigate("/list");
    }
  };

  const goToSignup = () => {
    if (logActive) {
      navigate("/signup");
    }
    return;
  };

  return (
    <div className="bodyLogin">
      <div className="backgroundLogin">
        <section className="containerLogin">
          <img src="/images/leetekwoo/webucksLogo.jpg" alt="logo" />
          <form className="containLogin">
            <input
              type="text"
              className="Input id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              maxLength="50"
              onChange={handleIdInput}
              onKeyUp={setLogin}
              // style={border}
              value={idValue}
            />
            <input
              type={pwType}
              className="Input pw"
              placeholder="비밀번호"
              maxLength="24"
              onChange={handlePwInput}
              onKeyUp={setLogin}
              value={pwValue}
            />
            <i className={eye} onClick={pwViewHide}></i>
            <button className="loginButton" style={Btn} onClick={goToList}>
              로그인
            </button>
            <div className="searchPw" onClick={goToSignup}>
              비밀번호를 잊으셨나요?
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Login;
