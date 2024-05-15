import React from 'react'

const AdminHeader = () => (
  <header className="bg-gray-800 text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between p-4">
      <div className="flex items-center">
        <h1 className="text-xl text-dark-red font-bold">Admin Dashboard</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="hover:text-gray-400">
          Home
        </a>
        <a href="/profile" className="hover:text-gray-400">
          Profile
        </a>
        <a href="/settings" className="hover:text-gray-400">
          Settings
        </a>
        <a href="/logout" className="hover:text-gray-400">
          Logout
        </a>
      </nav>
    </div>
  </header>
)

export default AdminHeader
