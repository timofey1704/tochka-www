import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import header_logo from '../../img/header_logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const storedIsOpen = sessionStorage.getItem('menuIsOpen')
    setIsOpen(storedIsOpen === 'true')
  }, [])

  const toggleMenu = () => {
    const newState = !isOpen
    setIsOpen(newState)
    sessionStorage.setItem('menuIsOpen', newState)
  }

  const closePopup = () => {
    setIsOpen(false)
    sessionStorage.setItem('menuIsOpen', false)
  }

  return (
    <header className="header-container">
      <img src={header_logo} alt="logo" className="header-img" />
      <div className="header-name">
        <h1>TOCHKA</h1>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`mini-popup ${isOpen ? 'open' : 'closed'}`}>
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
            to="."
            end
            onClick={closePopup}
          >
            О нас
          </NavLink>

          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
            to="track-record"
            onClick={closePopup}
          >
            Записать трек
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
