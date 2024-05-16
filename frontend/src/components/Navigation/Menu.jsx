import React from 'react'
import Header from '../Header/Header'
import AdminHeader from '../Header/AdminHeader'
import './Menu.css'

const Menu = ({ isAdminRoute }) => {
  return <>{isAdminRoute ? <AdminHeader /> : <Header />}</>
}

export default Menu
