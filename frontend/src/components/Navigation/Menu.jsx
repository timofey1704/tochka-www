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
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? 'activeLink' : 'Link')}
        to="contacts"
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Menu
