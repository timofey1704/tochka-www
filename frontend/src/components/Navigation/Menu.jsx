import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
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
  )
}

export default Menu
