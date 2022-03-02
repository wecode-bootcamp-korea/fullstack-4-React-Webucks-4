import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'
// import { SiStarbucks } from 'react-icons/si'

function Login() {
    const navigate = useNavigate()
    
    const [id, setid] = useState('')
    const [pw, setpw] = useState('')

    const valCheck = () => {
        if (this.state.id.include('@') && this.state.pw.length > 7) {
            console.log("Hi!")
        }
    }

    function enter() {
        // if (inputValue.id.includes('@') && inputValue.pw.length >= 8) {
        navigate("/List-yeonjoo")
    }

    return (
        <div className="container">
            <div className="login__container">
                <img className="webucks__logo" src='./images/yeonjookim/webucks_logo.svg' alt="webucks_logo" />
                <div className="login__box">
                    <input className="login__input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" value={id} onChange={(e) => {setid(e.target.value); valCheck();}} required />
                    {/* <input name="id" onChange={valCheck} value={id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" required /> */}
                    <input className="login__input" type="password" placeholder="비밀번호" value={pw} onChange={(e) => {setpw(e.target.value); valCheck();}} required />
                    {/* <input name="pw" onChange={valCheck} value={pw} type="password" placeholder="비밀번호" required /> */}
                    <button className="login__btn" onClick={enter} >로그인</button>
                </div>
                <Link to="/signup">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    )
}

export default Login