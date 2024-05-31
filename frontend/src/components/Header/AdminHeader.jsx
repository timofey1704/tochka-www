import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'

const AdminHeader = () => {
  const [activeLink, setActiveLink] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSetActiveLink = (link) => {
    setActiveLink(link)
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <header className="bg-blue-400 text-white shadow-md">
      <div className="container mx-auto flex justify-center">
        <nav className="flex space-x-5 py-5">
          <NavLink
            to="/dashboard/home"
            exact="true"
            className={`text-white ${
              activeLink === '/dashboard' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/dashboard')}
          >
            Главная
          </NavLink>
          <NavLink
            to="/dashboard/employees"
            className={`text-white ${
              activeLink === '/employees' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/employees')}
          >
            Сотрудники
          </NavLink>
          <NavLink
            to="/dashboard/clients"
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
            onClick={handleLogout}
          >
            Выйти из системы
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default AdminHeader
