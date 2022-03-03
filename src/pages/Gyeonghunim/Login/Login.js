import React, { useState, useEffect }  from "react";
import './Login.scss'
import logoImage from '../resource/logo.png';

const LoginGyeonghun = () => {
  const [inputIdData, setInputIdData] = useState(0);
  const [inputPwData, setInputPwData] = useState(0);
  
function handleIdInput(event){
setInputIdData(event.target.value)
// console.log(inputIdData)
}
function handlePwInput(event){
  setInputPwData(event.target.value)
  // console.log(inputPwData)
  }

  return (
  <div className="login_case"><img className="logo" src={logoImage} />
      <form action="/examples/media/action_target.php">
        <input onChange={handleIdInput} type="text" id="idInput" className="login_id margin_top" placeholder="전화번호, 사용자 이름 또는 이메일" /><br />
        <input onChange={handlePwInput} type="password" id="pwInput" className="login_password margin_top" placeholder="비밀번호" /><br />
        <button className="login_button margin_top"  type="button" disabled="true" onclick="location.href='list.html'">로그인</button>
        <p className="question">비밀번호를 잊으셨나요?</p>
    </form>
  </div>
  );
};
export default LoginGyeonghun;
