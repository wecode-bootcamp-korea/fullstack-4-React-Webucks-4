import { Link, useNavigate } from "react-router-dom";
import "./Login.scss"
import { useState } from "react";



function LoginChaeWon() {
    function clickLogin() {
        navigate("/List-ChaeWon");
    }
    const [inputId, setinputId] = useState('');
    const [inputPw, setinputPw] = useState('')

    function handleIdInput(event) {
        setinputId(event.target.value);
        console.log(inputId);
    }

    function handlePwInput(event) {
        setinputPw(event.target.value)
        console.log(inputPw);
    };
    
    const navigate = useNavigate();
    return (
        <div>
            <div className="loginBox">
          <header className="loginLogo">WeBucks</header>
          <div className="inputs" action="./list.html">
              <input type="text" className='userName' onChange = {handleIdInput} placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input type="password" className="password" onChange = {handlePwInput} placeholder="비밀번호"/>
              <button className="loginButton" /*disabled="disabled"*/ onClick={clickLogin}>로그인</button>
          </div>
            <Link to="/signup" className="lostPassword" disabled="disabled">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    )
}

export default LoginChaeWon;