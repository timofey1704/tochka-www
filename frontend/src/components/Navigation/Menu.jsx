import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import './Menu.css'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Header />
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
            Заказать трек
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
            to="photo"
            onClick={closePopup}
          >
            Заказать фото/видеосъемку
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
            to="contacts"
            onClick={closePopup}
          >
            Контакты / Цены
          </NavLink>
        </nav>
      </div>
      <hr />
      <div className="studio-name">
        <div className="studio-name-one">TOCHKA</div>
        <div className="studio-name-two">STUDIO</div>
      </div>
    </>
  )
}

export default Menu
