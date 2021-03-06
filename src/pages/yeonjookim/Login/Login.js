import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import styles from './Login.module.scss'
// import { SiStarbucks } from 'react-icons/si'

function Login() {
    const navigate = useNavigate()
    
    // id: "yeonjookim@wecode.com"
    // pw: "123456!@#ABCabc"

    const [input, setInput] = useState({
        id: '',
        pw: '',
        isValid: false
    })

    useEffect(() => {
      valCheck()
    }, [input.id, input.pw])
    

    const valCheck = () => {
        if (input.id.includes('@') && input.pw.length>=5) {
            setInput({...input, isValid:true})
        }
    }

    const handleIdInput = (event) => {   
        if (!event.target.value.includes('@')) {
            setInput({...input, id:event.target.value, isValid:false})
        } else {
            setInput({...input, id:event.target.value})
            valCheck()
        }
    }

    const handlePwInput = (event) => {      
        if (event.target.value.length < 5) {
            setInput({...input, pw:event.target.value, isValid:false})
        } else {
            setInput({...input, pw:event.target.value})
            valCheck()
        }
    }

    function enter() {
        navigate("/List-yeonjoo")
        // fetch("/users/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         email: input.id,
        //         password: input.pw,
        //     }),
        // })
            // .then((response) => response.json())
            // .then((result) => console.log("결과: ", result))
    }


    return (
        <div className={styles.container}>
            <div className={styles.login__container}>
                <img className={styles.webucks__logo} src='./images/yeonjookim/webucks_logo.svg' alt="webucks_logo" />
                <div className={styles.login__box}>
                    <input className={styles.login__input} type="text" placeholder="전화번호, 사용자 이름 또는 이메일" 
                        onChange={handleIdInput} onKeyUp={e => {if (e.key==='Enter') return enter()}} required />
                    <input className={styles.login__input} type="password" placeholder="비밀번호" 
                        onChange={handlePwInput} onKeyUp={e => {if (e.key==='Enter') return enter()}} required />
                    <button className={`${styles.login__btn} ${input.isValid? styles.active : ''}`} disabled={input.isValid? false : true} onClick={enter} >로그인</button>
                </div>
                <Link to="/signup">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    )
}

export default Login