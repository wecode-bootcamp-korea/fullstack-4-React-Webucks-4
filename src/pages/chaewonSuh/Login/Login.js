import { Link, useNavigate } from "react-router-dom";
import "./Login.scss"
import { useMemo , useState } from "react";

/*  function LoginEnable() {
        useEffect(() =>  {
            return (inputId.includes('@') && inputPw.length > 4 ? true : false )
        },[inputPw, inputId]); 
        */

function LoginChaeWon() {

    function clickLogin() {
        //
        fetch("http://52.79.143.176:8000/users/login", {
            method: "POST",
                  headers: {
                      'Content-Type': "application/json"
                  },
            body: JSON.stringify({
              email: inputId,
              password: inputPw,
            }),
          })
            .then((response) => response.json())
            .then((result) => console.log("결과: ", result.token));
    }

        //재준님의 검증 코드
    // function clickValidation() {
    //     inputId.includes('@') && inputPw.length > 4 ? setbtnEnable(false) : setbtnEnable(true)
    // }
    
    const [inputId, setinputId] = useState('');
    const [inputPw, setinputPw] = useState('');
    // const [btnEnable, setbtnEnable] = useState(true); 
    const navigate = useNavigate();


    // useEffect(() =>  {
    //     inputId.includes('@') && inputPw.length > 4 ? setbtnEnable(false) : setbtnEnable(true) 
    // },[inputPw, inputId];

    const btnEnable = useMemo(() =>  {
        return (inputId.includes('@') && inputPw.length > 4 ? false: true )
    },[inputPw, inputId]);


    return (
        <div>
            <div className="loginBox">
          <header className="loginLogo">WeBucks</header>
          <div className="inputs" action="./list.html">
              <input type="text" className='userName' onChange = {e => setinputId(e.target.value)} placeholder="전화번호, 사용자 이름 또는 이메일"/>
              <input type="password" className="password" onChange = {e => setinputPw(e.target.value)} placeholder="비밀번호"/>
              <button className="loginButton" disabled= {btnEnable} onClick={clickLogin}>로그인</button>
          </div>
            <Link to="/signup" className="lostPassword" disabled="disabled">비밀번호를 잊으셨나요?</Link>
            </div>
        </div>
    )
}

export default LoginChaeWon;