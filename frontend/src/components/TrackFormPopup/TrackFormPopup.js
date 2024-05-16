import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { fetchTrack } from '../../redux/slices/tracksSlice'
import './TrackFormPopup.css'
const TrackFormPopup = ({ onClose }) => {
  const [telegram_id, setTelegram_id] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isTelegram_idEmpty, setIsTelegram_idEmpty] = useState(true)
  // eslint-disable-next-line
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true)
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
          url: 'http://localhost:4000/track-record',
          data: databaseDetails,
        })
      )
      onClose()
      toast.success('Заявка успешно отправлена!')
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)

      toast.error('Произошла ошибка при отправке данных')
    }
  }

  const handleAuthorChange = (e) => {
    setTelegram_id(e.target.value)
    setIsTelegram_idEmpty(e.target.value === '')
  }

  const handlePhoneChange = (e) => {
    // Оставляем только цифры
    const phoneValue = e.target.value.replace(/\D/g, '')
    setPhone(phoneValue)
    setIsPhoneEmpty(phoneValue === '')
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
    <div className="popup-container">
      <div className="popup">
        <div className="popup-border">
          <span className="popup-title">Tochka Records</span>
          <h2 className="form-header">Записать трек</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="author">Ваш Telegram ID: </label>
              <div className="author-input-container">
                <span
                  className={`at-symbol ${isTelegram_idEmpty ? 'empty' : ''}`}
                >
                  @
                </span>
                <input
                  type="text"
                  id="author"
                  value={telegram_id}
                  onChange={handleAuthorChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="date">Дата:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
              />
            </div>

            <div>
              <label htmlFor="time">Время:</label>
              <input
                type="time"
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone">Контактный телефон: </label>
              <div className="phone-input-container">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  placeholder="+7 (___) ___-__-__"
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={handleTelegramRequest}
              className="accept-request"
            >
              Написать нам!
            </button>
          </form>
          <span className="close-icon" onClick={onClose}>
            ×
          </span>
        </div>
      </div>
    </div>
  )
}

export default TrackFormPopup
