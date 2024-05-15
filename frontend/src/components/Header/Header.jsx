import React from 'react'
import header_logo from '../../img/header_logo.png'
import './Header.css'

const Header = () => {
  return (
    <header className="header-container">
      <img src={header_logo} alt="logo" className="header-img" />
      <div className="header-name">
        <h1>TOCHKA</h1>
      </div>
    </header>
  )
}

export default Header
