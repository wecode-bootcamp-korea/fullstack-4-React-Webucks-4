import React from 'react'
import styles from './TopNav.module.scss'

function TopNav() {

  const showMenu = () => {
    // 작동 안됨..ㅜㅜ
    document.querySelector("header span:nth-child(2)").value = "🔓"
  }
  
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