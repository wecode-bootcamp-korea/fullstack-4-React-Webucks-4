import React, {useState, useEffect} from 'react'
import styles from './TopNav.module.scss'

function TopNav() {

  const showMenu = () => {
    const lockBtn = document.querySelector("header span:nth-child(2)")
    const ul = document.querySelector("ul")

    if (lockBtn.innerHTML === "🔒") {
      lockBtn.textContent = "🔓"
      ul.className = styles.header__btn__clicked
    } else {
      lockBtn.textContent = "🔒"
      ul.className = styles.header__btn
    }
  }

  // 창의 width사이즈를 windowWidth 이름의 state로 관리합니다.
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  // 자물쇠를 열어둔 상태에서 width가 커질때를 대응하기 위해서 lockWidth함수를 사용합니다. 원래의 클래스명을 다시 넣어줍니다.
  const lockWidth = (e) => {
    setwindowWidth(e.target.innerWidth)
    if (windowWidth >= 768) {
      const header = document.querySelector('header')
      const ul = document.querySelector('ul')
      const lockBtn = document.querySelector("header span:nth-child(2)")

      header.className = styles.header
      ul.className = styles.header__btn
      lockBtn.textContent = "🔒"
    }
  }
  
  // useEffect에 []이나 [windowWidth]를 넣으면 무한 렌더링에 걸릴 수 있음!
  useEffect(() => {
    window.addEventListener('resize', lockWidth)
    return () => {
    window.removeEventListener('resize', lockWidth)
    }
  }, )

  return (
    <div className={styles.header__box}>
      <header className={styles.header}>
          <span className={styles.header__title}>WeBucks</span> 
          <span onClick={showMenu} className={`${styles.menubtn} ${styles.hidden}`}>🔒</span>
          <ul className={styles.header__btn}>
              <li>COFFEE</li>
              <li>MENU</li>
              <li>STORE</li>
              <li>WHAT'S NEW</li>
          </ul>
      </header>
    </div>
  )
}

export default TopNav