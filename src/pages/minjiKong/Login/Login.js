import "./Login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [inputVal, changeInputVal] = useState("");

  const navigate = useNavigate();

  const goToList = () => {
    navigate("/list-minji");
  };

  const handleInput = (event) => {
    console.log(event.target.value);
    changeInputVal(event.target.value);
    console.log(inputVal);
  };

  return (
    <div className="Login">
      <h1 className="title">WeBucks</h1>
      <div className="form">
        <input
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          className="id"
          onChange={handleInput}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="pw"
          onChange={handleInput}
        />
        <button className="btn" onClick={goToList}>
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
