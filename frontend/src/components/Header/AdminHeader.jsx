import React from 'react'

const AdminHeader = () => (
  <header className="bg-blue-400 text-white shadow-md">
    <div className="container mx-auto flex items-center justify-between">
      <nav className="flex space-x-4 items-center pt-5">
        <a href="/" className=" text-white hover:text-red-600">
          Home
        </a>
        <a href="/profile" className="text-white ">
          Profile
        </a>
        <a href="/settings" className="text-white">
          Settings
        </a>
        <a href="/logout" className="text-white ">
          Logout
        </a>
      </nav>
    </div>
  </header>
)

export default AdminHeader
