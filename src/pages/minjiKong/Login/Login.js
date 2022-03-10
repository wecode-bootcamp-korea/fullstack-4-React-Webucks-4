import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [inputID, changeInputID] = useState("");
  const [inputPW, changeInputPW] = useState("");

  const disabled = inputID.includes("@") && inputPW.length >= 5;

  // const navigate = useNavigate();

  // const goToList = () => {
  //   navigate("/list-minji");
  // };

  const handleLogin = () => {
    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputID,
        password: inputPW,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log("결과 :", result));
  };

  const handleInputID = (event) => {
    changeInputID(event.target.value);
  };

  const handleInputPW = (event) => {
    changeInputPW(event.target.value);
  };

  return (
    <div className="Login">
      <h1 className="title">WeBucks</h1>
      <div className="form">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="id"
          onChange={handleInputID}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="pw"
          onChange={handleInputPW}
        />
        <button className="btn" onClick={handleLogin} disabled={!disabled}>
          로그인
        </button>
      </div>
      <Link to="/signup" className="findPW">
        비밀번호를 잊으셨나요?
      </Link>
    </div>
  );
}
export default Login;
