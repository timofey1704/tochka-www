import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WorklogChart from './WorklogChart'
import EmployeeChart from './EmployeeChart'

const Profile = () => {
  const [dataValue] = useState(73)
  const [clients, setClients] = useState([])
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        console.error('Token not found')
        return
      }

      try {
        const [clientsResponse, employeesResponse] = await Promise.all([
          axios.get('http://localhost:4000/track-record/next-week', {
            headers: { Authorization: token },
          }),
          axios.get('http://localhost:4000/employees', {
            headers: { Authorization: token },
          }),
        ])

        setClients(clientsResponse.data)
        setEmployees(employeesResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const handleAssign = async (clientId, employee) => {
    const updatedClients = clients.map((client) =>
      client.id === clientId
        ? { ...client, assignedEmployee: employee }
        : client
    )
    setClients(updatedClients)

    const token = localStorage.getItem('token')
    if (!token) {
      console.error('Token not found')
      return
    }

    try {
      await axios.post(
        'http://localhost:4000/employees/set-admin',
        {
          id: clientId,
          selected_admin: employee,
        },
        {
          headers: { Authorization: token },
        }
      )
    } catch (error) {
      console.error('Error assigning employee:', error)
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col font-palanquin px-6 py-12 lg:px-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Статистика по записям:
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl no-underline">
          <h2 className="text-xl font-semibold text-gray-700 mb-6">
            В этом месяце:
          </h2>
          <div className="grid gap-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Количество выполненных заказов:
              </span>
              <span className="text-gray-900 font-medium">x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Количество ожидаемых заказов:
              </span>
              <span className="text-gray-900 font-medium">x</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Количество отмененных заказов:
              </span>
              <span className="text-gray-900 font-medium">x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Количество новых заказов:</span>
              <span className="text-gray-900 font-medium">x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Количество отработанных часов сотрудниками:
              </span>
              <span className="text-gray-900 font-medium">x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                Количество эффективно отработанных часов:
              </span>
              <span className="text-gray-900 font-medium">x</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-xl no-underline">
          <WorklogChart value={dataValue} />
        </div>
      </div>
      <h2 className="text-2xl font-bold text-gray-700 py-4">
        Назначение сотрудников клиентам
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Клиент
                  </th>
                  <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Назначенный сотрудник
                  </th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id}>
                    <td className="py-2 px-4 border-b border-gray-200">
                      {client.telegram_id}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-200">
                      <select
                        className="p-2 border border-gray-300 rounded w-full"
                        onChange={(e) =>
                          handleAssign(client.id, e.target.value)
                        }
                        value={client.assignedEmployee || ''}
                      >
                        <option value="">Не назначен</option>
                        {employees.map((employee) => (
                          <option
                            key={employee.username}
                            value={employee.username}
                          >
                            {employee.username}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center">
          <EmployeeChart
            clients={clients}
            employees={employees.map((e) => e.username)}
          />
        </div>
      </div>
    </div>
  )
}

export default Profile
