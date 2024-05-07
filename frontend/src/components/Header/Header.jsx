import React from 'react'
import header_logo from '../../img/header_logo.png'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <img src={header_logo} alt="logo" className="header-img" />
      <div className="header-name">
        <h1>TOCHKA</h1>
      </div>
    </div>
  )
}

export default Header
