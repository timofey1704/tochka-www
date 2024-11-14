'use client'

import React, { useState, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../redux/store'
import { toast } from 'react-hot-toast'
import { sendLead } from '@/app/redux/slices/LeadSlice'
import { showSuccess, showError } from '../../redux/slices/NotificationSlice'
import { DateCheck } from './DateCheck'
import { LeadPopupContentProps } from '@/app/types'
import CompleteNotification from './CompleteNotification'

const TrackFormPopup: React.FC<LeadPopupContentProps> = ({ onClose }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  const [telegram_id, setTelegram_id] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState<Date | undefined>(undefined)
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
      date: date.toISOString().split('T')[0],
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
      onClose()
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

    // try {
    //   await dispatch(
    //     sendLead({
    //       url: `${API_URL}/send-message/`,
    //       data: trackDetails,
    //     })
    //   )
    //   onClose()
    //   dispatch(
    //     showSuccess({
    //       message: 'Заявка успешно отправлена!',
    //       position: 'top-center',
    //     })
    //   )
    // } catch (error) {
    //   console.error('Ошибка при отправке сообщения:', error)
    //   dispatch(
    //     showError({
    //       message: 'Ошибка при отправке сообщения',
    //       position: 'top-center',
    //     })
    //   )
    // }
  }

  const handleAuthorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTelegram_id(e.target.value)
    setIsTelegram_idEmpty(e.target.value === '')
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const phoneValue = e.target.value.replace(/\D/g, '')
    setPhone(phoneValue)
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
            <DateCheck selectedDate={date} onDateChange={setDate} />
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
          <div className="mb-4">
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
      </div>
    </div>
  )
}

export default TrackFormPopup
