import React, {useState, useEffect} from 'react'
import styles from './TopNav.module.scss'

function TopNav() {

  const showMenu = () => {
    const lockBtn = document.querySelector("header span:nth-child(2)")
    const ul = document.querySelector("ul")

    if (lockBtn.innerHTML === "๐") {
      lockBtn.textContent = "๐"
      ul.className = styles.header__btn__clicked
    } else {
      lockBtn.textContent = "๐"
      ul.className = styles.header__btn
    }
  }

  // ์ฐฝ์ width์ฌ์ด์ฆ๋ฅผ windowWidth ์ด๋ฆ์ state๋ก ๊ด๋ฆฌํฉ๋๋ค.
  const [windowWidth, setwindowWidth] = useState(window.innerWidth)
  // ์๋ฌผ์ ๋ฅผ ์ด์ด๋ ์ํ์์ width๊ฐ ์ปค์ง๋๋ฅผ ๋์ํ๊ธฐ ์ํด์ lockWidthํจ์๋ฅผ ์ฌ์ฉํฉ๋๋ค. ์๋์ ํด๋์ค๋ช์ ๋ค์ ๋ฃ์ด์ค๋๋ค.
  const lockWidth = (e) => {
    setwindowWidth(e.target.innerWidth)
    if (windowWidth >= 768) {
      const header = document.querySelector('header')
      const ul = document.querySelector('ul')
      const lockBtn = document.querySelector("header span:nth-child(2)")

      header.className = styles.header
      ul.className = styles.header__btn
      lockBtn.textContent = "๐"
    }
  }
  
  // useEffect์ []์ด๋ [windowWidth]๋ฅผ ๋ฃ์ผ๋ฉด ๋ฌดํ ๋ ๋๋ง์ ๊ฑธ๋ฆด ์ ์์!
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
          <span onClick={showMenu} className={`${styles.menubtn} ${styles.hidden}`}>๐</span>
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