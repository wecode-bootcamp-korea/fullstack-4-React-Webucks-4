import React, { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import styles from'./Login.module.scss'
import logoImage from '../resource/logo.png';
import cx from "classnames";

const Login = () => {
  
  const [inputIdData, setInputIdData] = useState("");
  const [inputPwData, setInputPwData] = useState("");
  const [buttonState, setButtonState] = useState(false);


  let navigate = useNavigate();

function handleIdInput(event){
  setInputIdData(event.target.value)
  setLoginButton(event.target.value,inputPwData);
}
function handlePwInput(event){
  setInputPwData(event.target.value)
  setLoginButton(inputIdData,event.target.value);
}

function setLoginButton(id,pw){
if(id.indexOf("@")!=-1&&pw.length>4){
  setButtonState(true)
}else
{
  setButtonState(false)
}
}

function testLoginButton(){
  console.log("hey")
}

  return (
  <div className={styles.login_case}><img className={styles.logo} src={logoImage} />
      <form action="/examples/media/action_target.php">
        <input onChange={handleIdInput} type="text" id="idInput" className={styles.login_id+" "+styles.margin_top} placeholder="전화번호, 사용자 이름 또는 이메일" /><br />
        <input onChange={handlePwInput} type="password" id="pwInput" className={styles.login_password+" "+styles.margin_top} placeholder="비밀번호" /><br />
        <button className={cx(styles.login_button,styles.margin_top,{[styles.button_off] : !buttonState},{[styles.button_on] : buttonState})} type="button" disabled={!buttonState} onClick={() => {
    navigate(`/list-gyeonghun/`)}}
  >로그인</button>
        <p className={styles.question}>비밀번호를 잊으셨나요?</p>
    </form>
  </div>
  );
};
export default Login;
