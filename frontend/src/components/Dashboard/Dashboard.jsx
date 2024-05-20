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
        <h1 className="text-center text-3xl">Точка - панель управления</h1>
        <div className="flex justify-between text-xl py-10 ">
          <span className="text-left">
            Предстоящих записей на этой неделе: N
          </span>
          <span className="text-center">
            Завершенных записей на этой неделе : N
          </span>
        </div>
        <div className="text-center text-xl">
          Календарь записей на ближайшие дни :
        </div>
        <div>
          <DashboardCalendar />
        </div>
      </div>
    </>
  )
}

export default Dashboard
