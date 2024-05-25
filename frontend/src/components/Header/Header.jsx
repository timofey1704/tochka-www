import React, { useState, useEffect } from 'react'
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
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={header_logo} alt="logo" className="w-40 h-24" />
          <h1 className="hidden lg:block font-postNoBills text-4xl text-gray-800">
            TOCHKA
          </h1>
        </div>
        <div className="flex items-center">
          <div className="space-x-6 hidden lg:flex">
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'text-gray-800'
              }
              to="."
              end
              onClick={closePopup}
            >
              О нас
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'text-gray-800'
              }
              to="instrumental"
              onClick={closePopup}
            >
              Инструментальная база
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'text-gray-800'
              }
              to="mastering"
              onClick={closePopup}
            >
              Трек под ключ
            </NavLink>
          </div>
          <button
            className="lg:hidden flex flex-col items-center justify-center pr-2 h-9 w-9"
            onClick={toggleMenu}
          >
            <div
              className={`h-1 w-full bg-gray-800 mb-1 transform transition ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <div
              className={`h-1 w-full bg-gray-800 mb-1 transition ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <div
              className={`h-1 w-full bg-gray-800 transform transition ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white shadow-md`}
      >
        <nav className="flex flex-col items-center py-4 space-y-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800'
            }
            to="."
            end
            onClick={closePopup}
          >
            О нас
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800'
            }
            to="instrumental"
            onClick={closePopup}
          >
            Инструментальная база
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-blue-600' : 'text-gray-800'
            }
            to="mastering"
            onClick={closePopup}
          >
            Трек под ключ
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
