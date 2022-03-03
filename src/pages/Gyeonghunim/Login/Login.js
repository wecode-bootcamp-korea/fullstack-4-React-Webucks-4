import React, { useState, useEffect }  from "react";
import './Login.scss'
import logoImage from '../resource/logo.png';

const LoginGyeonghun = () => {
  const [inputIdData, setInputIdData] = useState("");
  const [inputPwData, setInputPwData] = useState("");
  const [buttonState, setButtonState] = useState(true);
  const [buttonClassName, setbuttonClassName] = useState("login_button margin_top button_off");
  
function handleIdInput(event){
  setInputIdData(event.target.value)
  if(inputPwData.length>4&&event.target.value.indexOf("@")!=-1){
    setButtonState(true)
    setbuttonClassName("login_button margin_top button_on")
    }else{
      setButtonState(false)
      setbuttonClassName("login_button margin_top button_off")
    }
}

function handlePwInput(event){
  setInputPwData(event.target.value)
  if(event.target.value.length>4&&inputIdData.indexOf("@")!=-1){
    setButtonState(true)
    setbuttonClassName("login_button margin_top button_on")
    }else{
      setButtonState(false)
      setbuttonClassName("login_button margin_top button_off")
    }
}



function hey(){

  console.log("hey")
}



  return (
  <div className="login_case"><img className="logo" src={logoImage} />
      <form action="/examples/media/action_target.php">
        <input onChange={handleIdInput} type="text" id="idInput" className="login_id margin_top" placeholder="전화번호, 사용자 이름 또는 이메일" /><br />
        <input onChange={handlePwInput} type="password" id="pwInput" className="login_password margin_top" placeholder="비밀번호" /><br />
        <button className={buttonClassName} type="button" disabled={buttonState} onClick={hey}>로그인</button>
        <p className="question">비밀번호를 잊으셨나요?</p>
    </form>
  </div>
  );
};
export default LoginGyeonghun;
