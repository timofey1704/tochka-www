import React from 'react'
import { NavLink } from 'react-router-dom'
import header_logo from '../../img/header_logo.png'
import './Menu.css'

const Menu = () => {
  return (
    <>
      <div className="header-container">
        <img src={header_logo} alt="logo" className="header-img" />
        <div className="header-name">Точка</div>
      </div>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
          to="."
          end
        >
          Главная
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
          to="about"
        >
          О нас
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
          to="contacts"
        >
          Контакты
        </NavLink>
      </nav>
    </>
  )
}

export default Menu
