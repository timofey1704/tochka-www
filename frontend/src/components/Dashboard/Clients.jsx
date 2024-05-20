import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Clients = () => {
  const [prevTableData, setPrevTableData] = useState([])
  const [nextTableData, setNextTableData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'http://localhost:4000/track-record/prev-week',
          {
            headers: { Authorization: token },
          }
        )
        setPrevTableData(response.data)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'http://localhost:4000/track-record/next-week',
          {
            headers: { Authorization: token },
          }
        )
        setNextTableData(response.data)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <div className="flex min-h-0 flex-1 flex-col font-custom px-6 py-6 lg:px-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-4">Клиенты за прошлую неделю:</h2>

          {prevTableData.length === 0 ? (
            <div className="text-xl text-center mr-9 font-bold">
              Нет клиентов
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Имя
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата посещения
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {prevTableData.map((client, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {client.telegram_id}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {client.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <h2 className="text-xl font-bold mt-10 ml-4 ">
            Клиенты за эту неделю:
          </h2>

          {nextTableData.length === 0 ? (
            <div className="text-xl text-center mt-9 font-bold">
              Нет клиентов
            </div>
          ) : (
            <table className="min-w-full mt-5 divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Имя
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата посещения
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {nextTableData.map((client, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {client.telegram_id}
                    </td>
                    <td className="px-6 py-4 text-center whitespace-nowrap">
                      {client.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  )
}

export default Clients
