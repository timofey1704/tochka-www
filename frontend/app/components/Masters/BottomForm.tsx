'use client'
import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { sendLead } from '@/app/redux/slices/LeadSlice'
import { showError } from '../../redux/slices/NotificationSlice'
import { AppDispatch } from '../../redux/store'
import CompleteNotification from '../LeadPopup/CompleteNotification'
import { BottomFormProps } from '@/app/types'

const BottomForm: React.FC<BottomFormProps> = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const [telegram_id, setTelegram_id] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [isTelegram_idEmpty, setIsTelegram_idEmpty] = useState(true)
  const dispatch = useDispatch<AppDispatch>()

  const handleTelegramRequest = async () => {
    if (!telegram_id || !phone || !date || !time || !endTime) {
      toast.error('Поля не могут быть пустыми!', { icon: '❗️' })
      return
    }

    const trackDetails = {
      message: `Автор: @${telegram_id}, Дата: ${date}, Время: ${time} - ${endTime}, Контактный номер: +${phone}, `,
    }
    const databaseDetails = {
      telegram_id,
      date: date.toString().split('T')[0],
      time,
      end_time: endTime,
      phone,
    }

    try {
      const response = await dispatch(
        sendLead({
          url: `${API_URL}/clients/`,
          data: databaseDetails,
        })
      ).unwrap()
      toast.custom(
        <CompleteNotification
          date={databaseDetails.date}
          time={databaseDetails.time}
          end_time={databaseDetails.end_time}
        />,
        { position: 'bottom-right' }
      )
      if (response.reason === 'TIME_UNAVAILABLE') {
      }
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
      if (
        typeof error === 'object' &&
        error !== null &&
        'reason' in error &&
        error.reason === 'TIME_UNAVAILABLE'
      ) {
        dispatch(
          showError({
            message: 'Выбранное время недоступно.',
            position: 'top-center',
          })
        )
      } else {
        console.error('Ошибка при отправке сообщения:', error)
        dispatch(
          showError({
            message: 'Ошибка при отправке данных!',
            position: 'top-center',
          })
        )
      }
      return
    }
  }

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTelegram_id(e.target.value)
    setIsTelegram_idEmpty(e.target.value === '')
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneValue = e.target.value.replace(/\D/g, '')
    setPhone(phoneValue)
  }

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6">
      <div>
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

      <div>
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

      <div className="mb-4 flex">
        <div className="mr-2 flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="time">
            Время начала:
          </label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="ml-2 flex-1">
          <label className="block text-gray-700 mb-2" htmlFor="endTime">
            Время окончания:
          </label>
          <input
            type="time"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="phone">
          Контактный телефон:
        </label>
        <div className="relative">
          <input
            type="tel"
            placeholder="+7 (___) ___-__-__"
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
  )
}

export default BottomForm
