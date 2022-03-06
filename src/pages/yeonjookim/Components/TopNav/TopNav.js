import React from 'react'
import './TopNav.scss'

function TopNav() {
  return (
    <div className='header__box'>
      <header className='header'>
          <span className="header__title">WeBucks</span> 
          <span className="menubtn hidden">🔒</span>
          <ul className="header__btn">
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