import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { fetchTrack } from '../../redux/slices/tracksSlice'
import { showSuccess, showError } from '../../redux/slices/notificationSlice'

const TrackFormPopup = ({ onClose }) => {
  const [telegram_id, setTelegram_id] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isTelegram_idEmpty, setIsTelegram_idEmpty] = useState(true)
  const dispatch = useDispatch()

  const handleTelegramRequest = async () => {
    if (!telegram_id || !phone || !date || !time) {
      toast.error('Поля не могут быть пустыми!', { icon: '❗️' })
      return
    }

    const trackDetails = {
      message: `Автор: @${telegram_id}, Дата: ${date}, Время: ${time}, Контактный номер: +${phone}, `,
    }
    const databaseDetails = {
      telegram_id,
      date,
      time,
      phone,
    }

    try {
      dispatch(
        fetchTrack({
          url: 'http://localhost:4000/send-message',
          data: trackDetails,
        })
      )

      dispatch(
        fetchTrack({
          url: 'http://localhost:4000/requests',
          data: databaseDetails,
        })
      )

      onClose()
      dispatch(
        showSuccess({
          message: 'Заявка успешно отправлена!',
          position: 'top-center',
        })
      )
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
      dispatch(
        showError({
          message: 'Ошибка при отправке данных!',
          position: 'top-center',
        })
      )
    }
  }

  const handleAuthorChange = (e) => {
    setTelegram_id(e.target.value)
    setIsTelegram_idEmpty(e.target.value === '')
  }

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/\D/g, '')
    setPhone(phoneValue)
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value)
    const today = new Date()
    const oneMonthFromToday = new Date()
    oneMonthFromToday.setMonth(today.getMonth() + 1)

    if (selectedDate < today) {
      toast.error('Нельзя записаться в прошлое', { icon: '🤪' })
      setDate('')
    } else if (selectedDate > oneMonthFromToday) {
      toast.error('Мы не проводим запись больше, чем на месяц вперед', {
        icon: '🤪',
      })
      setDate('')
    } else {
      setDate(e.target.value)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 relative max-w-md w-full border-2 border-gray-300 mt-8">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &#10005;
        </button>

        <div className="text-xl font-semibold mb-4">Запись на услугу</div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="telegramId">
              Ваш Telegram ID:
            </label>
            <div className="relative">
              <span
                className={`absolute left-3 top-2 text-gray-500 ${
                  isTelegram_idEmpty ? 'empty' : ''
                }`}
              >
                @
              </span>
              <input
                type="text"
                id="telegramId"
                value={telegram_id}
                onChange={handleAuthorChange}
                className="pl-8 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="date">
              Дата:
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="time">
              Время:
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="phone">
              Контактный телефон:
            </label>
            <div className="relative">
              <InputMask
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___) ___-__-__"
                type="text"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleTelegramRequest}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
          >
            Записаться
          </button>
        </form>
      </div>
    </div>
  )
}

export default TrackFormPopup
