import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaFileExcel } from 'react-icons/fa'

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

  const handlePrevWeekDownload = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        'http://localhost:4000/track-record/export-prev-week',
        {
          headers: { Authorization: token },
          responseType: 'blob', // важно для правильной обработки бинарных данных
        }
      )
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'clients-prev-week.xlsx')
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    } catch (error) {
      console.error('Ошибка при выгрузке данных:', error)
    }
  }

  const handleNextWeekDownload = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(
        'http://localhost:4000/api/export-next-week',
        {
          headers: { Authorization: token },
          responseType: 'blob', // важно для правильной обработки бинарных данных
        }
      )
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'clients-next-week.xlsx')
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    } catch (error) {
      console.error('Ошибка при выгрузке данных:', error)
    }
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col font-custom px-6 py-6 lg:px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mb-4">Клиенты за прошлую неделю:</h2>

          <button
            className="py-3 text-blue-about-text hover:underline flex items-center"
            onClick={handlePrevWeekDownload}
          >
            <FaFileExcel className="m-2" />
            Выгрузить в excel
          </button>
        </div>
        {prevTableData.length === 0 ? (
          <div className="text-xl text-center mr-9 font-bold">Нет клиентов</div>
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
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Время посещения
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Номер клиента
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
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {client.formatted_time}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {`+${client.phone}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <hr />
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold mt-10 ml-4 ">
            Клиенты на этой неделе:
          </h2>
          <button
            className="pt-10 text-blue-about-text hover:underline flex items-center"
            onClick={handleNextWeekDownload}
          >
            <FaFileExcel className="m-2" />
            Выгрузить в excel
          </button>
        </div>
        {nextTableData.length === 0 ? (
          <div className="text-xl text-center mt-9 font-bold">Нет клиентов</div>
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
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Время посещения
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Номер клиента
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
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {client.formatted_time}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    {`+${client.phone}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default Clients
