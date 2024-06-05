import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

const AdminHeader = () => {
  const [activeLink, setActiveLink] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  const handleSetActiveLink = (link) => {
    setActiveLink(link)
  }
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <header className="bg-gray-100 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-5">
        <nav className="flex space-x-5">
          <NavLink
            to="/dashboard/home"
            className={`text-black hover:underline ${
              activeLink === '/dashboard' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/dashboard')}
          >
            Календарь
          </NavLink>
          <NavLink
            to="/dashboard/employees"
            className={`text-black hover:underline ${
              activeLink === '/employees' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/employees')}
          >
            Сотрудники
          </NavLink>
          <NavLink
            to="/dashboard/clients"
            className={`text-black hover:underline ${
              activeLink === '/clients' ? 'underline' : ''
            }`}
            onClick={() => handleSetActiveLink('/clients')}
          >
            Клиенты
          </NavLink>
        </nav>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="ml-auto text-black bg-gray-100 border border-black
             px-4 py-2 rounded-lg shadow-md hover:shadow-lg"
            >
              Привет, {user?.username}!
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content className="bg-white shadow-md rounded p-2">
            <DropdownMenu.Item className="px-4 py-2 hover:bg-gray-100 text-gray-600 text-center cursor-pointer">
              Профиль
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="px-4 py-2 hover:bg-gray-100 text-gray-600 text-center cursor-pointer"
              onClick={handleLogout}
            >
              Выйти
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  )
}

export default AdminHeader
