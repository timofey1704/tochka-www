import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
  const [activeLink, setActiveLink] = useState('')

  const handleSetActiveLink = (link) => {
    setActiveLink(link)
  }

  return (
    <header className="bg-blue-400 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <nav className="flex space-x-4 items-center pt-5">
          <NavLink
            to="/dashboard"
            exact="true"
            className={`text-white ${
              activeLink === '/dashboard' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/dashboard')}
          >
            Главная
          </NavLink>
          <NavLink
            to="/employees"
            className={`text-white ${
              activeLink === '/employees' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/employees')}
          >
            Сотрудники
          </NavLink>
          <NavLink
            to="/clients"
            className={`text-white ${
              activeLink === '/clients' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/clients')}
          >
            Клиенты
          </NavLink>
          <NavLink
            to="/login"
            className={`text-white ${
              activeLink === '/login' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/login')}
          >
            Выйти из системы
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default AdminHeader
