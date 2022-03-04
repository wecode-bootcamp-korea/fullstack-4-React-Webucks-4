import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import './Login.scss'
// import { SiStarbucks } from 'react-icons/si'

function Login() {
    const navigate = useNavigate()
    
    const [input, setInput] = useState({
        id: '',
        pw: '',
        isValid: false
    })

    function valCheck () {
        if (input.id.includes('@') && input.pw.length>=5) {
            setInput({...input, isValid:true})
        }
    }

    function handleIdInput(event) {
        setInput({...input, id:event.target.value})
        valCheck()
    }

    function handlePwInput(event) {
        setInput({...input, pw:event.target.value})
        valCheck()
    }

    function enter() {
        navigate("/List-yeonjoo")
    }

    return (
        <div className="container">
            <div className="login__container">
                <img className="webucks__logo" src='./images/yeonjookim/webucks_logo.svg' alt="webucks_logo" />
                <div className="login__box">
                    <input className="login__input" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onChange={handleIdInput} required />
                    {/* <input name="id" onChange={valCheck} value={id} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" required /> */}
                    <input className="login__input" type="password" placeholder="비밀번호" onChange={handlePwInput} required />
                    {/* <input name="pw" onChange={valCheck} value={pw} type="password" placeholder="비밀번호" required /> */}
                    <button className={`login__btn ${input.isValid? 'active' : ''}`} onClick={enter} >로그인</button>
                </div>
                <Link to="/signup">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    )
}

export default Login