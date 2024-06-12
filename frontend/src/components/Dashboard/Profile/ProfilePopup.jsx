import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { parse, isValid } from 'date-fns'
import 'react-datepicker/dist/react-datepicker.css'

const ProfilePopup = ({ client, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)
  const [comment, setComment] = useState(client.comment || '')

  useEffect(() => {
    if (client.time) {
      const parsedStartTime = parse(client.time, 'HH:mm:ss', new Date())
      if (isValid(parsedStartTime)) {
        setStartTime(parsedStartTime)
      } else {
        console.error('Invalid start time:', client.time)
      }
    }

    if (client.end_time) {
      const parsedEndTime = parse(client.end_time, 'HH:mm:ss', new Date())
      if (isValid(parsedEndTime)) {
        setEndTime(parsedEndTime)
      } else {
        console.error('Invalid end time:', client.end_time)
      }
    }

    setIsVisible(true)
  }, [client.time, client.end_time])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className="fixed inset-0 flex justify-end items-center bg-gray-800 bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div
        className={`bg-white px-4 py-2 rounded-3xl shadow-lg transform transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        } h-[90%] mt-[5%] mb-[5%] w-[32%] mr-4 flex flex-col justify-between`}
      >
        <div className="overflow-auto">
          <div className="flex justify-between items-center border-b border-dashed pb-1">
            <h2 className="text-xl font-palanquin">
              Клиент {client.telegram_id}
            </h2>
            <button onClick={handleClose} className="text-2xl pb-1">
              &times;
            </button>
          </div>
          <div className="mt-4 border-b border-dashed pb-3 font-palanquin">
            <div>
              <strong>Начало:</strong>
              <DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                className="w-20 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-2">
              <strong>Конец:</strong>
              <DatePicker
                selected={endTime}
                onChange={(date) => setEndTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="HH:mm"
                className="w-20 px-3 py-2 mt-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <p className="mb-2">
              <strong>Cотрудник:</strong> {client.selected_admin}
            </p>
          </div>
          <div className="mt-4 border-b border-dashed pb-3">
            <div className="mb-2">
              <strong>Список оказанных услуг:</strong>
              <table className="min-w-full mt-3 table-fixed">
                <thead>
                  <tr>
                    <th className="text-left text-gray-600">Услуга</th>
                    <th className="text-left text-gray-600">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-4">Аренда электрогитары</td>
                    <td className="py-4">500 руб/час</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4">Аренда cтудии</td>
                    <td className="py-4">700 руб/час</td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-4"></td>
                    <td className="py-4">1200</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 border-b border-dashed pb-3">
            <p className="mb-2 text-sm">
              <strong>Комментарий:</strong>{' '}
              <span className="text-gray-500">(по желанию)</span>
            </p>
            <textarea
              id="comment"
              placeholder="Добавить комментарий"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md w-full h-16 focus:outline-none focus:ring-2  placeholder-gray-400 text-left align-top"
              rows={3}
            />
          </div>
        </div>
        <div className="flex justify-end mt-4 pb-3">
          <button
            onClick={handleClose}
            className="mr-4 px-4 py-2 bg-white text-black rounded-lg shadow-md hover:scale-105 hover:shadow-xl focus:outline-none"
          >
            Отменить
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:scale-105 hover:shadow-xl focus:outline-none">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePopup
