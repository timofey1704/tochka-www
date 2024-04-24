import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import './Menu.css'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Header />
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`main-menu ${isOpen ? 'open' : ''}`}>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
          to="."
          end
        >
          Заказать трек
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
          to="photo"
        >
          Заказать фото/видеосъемку
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
          to="contacts"
        >
          Контакты / Цены
        </NavLink>
      </nav>
      <hr />
      <div className="studio-name">
        <div className="studio-name-one">TOCHKA</div>
        <div className="studio-name-two">STUDIO</div>
      </div>
    </>
  )
}

export default Menu
