import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaUserPlus } from 'react-icons/fa'
import AdminPopup from './EmpComponents/AdminPopup'

const Employees = () => {
  const [users, setUsers] = useState([])
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])
  // выносим логику в отдельную функцию для повторного использования
  // делаем эту функцию асинхронной, чтобы она могла использовать await для динамического рендеринга новых админов
  const fetchData = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get('http://localhost:4000/employees', {
        headers: { Authorization: token },
      })
      setUsers(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  const handleStatusChange = async (id, isActive) => {
    const token = localStorage.getItem('token')
    try {
      // асинхронный запрос для изменения статуса пользователя
      await axios.put(
        `http://localhost:4000/employees/${id}/status`,
        { isActive },
        {
          headers: { Authorization: token },
        }
      )

      // обновление состояния users
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.user_id === id ? { ...user, is_active: isActive } : user
        )
      )
    } catch (error) {
      console.error('Error updating user status:', error)
    }
  }

  const handleNewAdmin = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }
  const handleAddAdminSuccess = () => {
    fetchData()
    // добавление новых админов в таблицу
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col font-custom px-6 py-6 lg:px-4">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-4">Список сотрудников студии:</h2>
        {users.length === 0 ? (
          <div className="text-xl text-center mr-9 font-bold">
            Нет сотрудников
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Имя
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email сотрудника
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Доступ администратора
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.user_id}>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {user.username}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={user.is_active}
                      onChange={() =>
                        handleStatusChange(user.user_id, !user.is_active)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <button
          className="min-w-full text-right py-3 text-blue-about-text hover:underline flex items-center justify-end"
          onClick={handleNewAdmin}
        >
          <FaUserPlus className="mr-3 text-xl" />
          <span>Добавить администратора</span>
        </button>
      </div>
      {showPopup && (
        <AdminPopup
          onClose={handleClosePopup}
          onSuccess={handleAddAdminSuccess}
        />
      )}
    </div>
  )
}

export default Employees
