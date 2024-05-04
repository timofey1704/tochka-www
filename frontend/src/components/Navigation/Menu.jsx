import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import './Menu.css'

const Menu = () => {
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
            О нас
          </NavLink>
        </nav>
      </div>
    </>
  )
}

export default Menu
