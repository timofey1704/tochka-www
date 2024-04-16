import React from 'react'
import { NavLink } from 'react-router-dom'
import header_logo from '../../img/header_logo.png'
import './Menu.css'

const Menu = () => {
  return (
    <>
      <div className="header-container">
        <img src={header_logo} alt="logo" className="header-img" />
        <div className="header-name">TOCHKA</div>
      </div>
      <hr />

      <div className="studio-name">
        <div className="studio-name-one">TOCHKA</div>
        <div className="studio-name-two">STUDIO</div>
      </div>
      <nav>
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
    </>
  )
}

export default Menu
