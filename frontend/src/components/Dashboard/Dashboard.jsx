import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardCalendar from './Calendar/Calendar'

const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      if (!token) {
        navigate('/login')
      }
    }

    checkAuth()
  }, [navigate])

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col font-custom px-6 py-12 lg:px-8">
        <h1 className="text-center text-xl">Календарь записей :</h1>
        <div>
          <DashboardCalendar />
        </div>
      </div>
    </>
  )
}

export default Dashboard
