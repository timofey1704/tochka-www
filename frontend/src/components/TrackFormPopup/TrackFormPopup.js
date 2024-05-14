import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { fetchTrack } from '../../redux/slices/tracksSlice'
import { setError } from '../../redux/slices/errorSlice'
import './TrackFormPopup.css'

const TrackFormPopup = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [phone, setPhone] = useState('')
  const [isAuthorEmpty, setIsAuthorEmpty] = useState(true)
  // eslint-disable-next-line
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(true)
  const dispatch = useDispatch()

  const handleTelegramRequest = async () => {
    if (!title || !author || !phone) {
      toast.error('Поля не могут быть пустыми!', { icon: '❗️' })
      return
    }

    const trackDetails = {
      message: `Название трека: ${title}, Автор: ${author}, Контактный номер: +${phone}`,
    }
    try {
      await dispatch(
        fetchTrack({
          url: 'http://localhost:4000/send-message',
          data: trackDetails,
        })
      )
      onClose()
      toast.success('Заявка успешно отправлена!')
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)

      dispatch(setError('Произошла ошибка при отправке данных!'))
    }
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
    setIsAuthorEmpty(e.target.value === '')
  }

  const handlePhoneChange = (e) => {
    // Оставляем только цифры
    const phoneValue = e.target.value.replace(/\D/g, '')
    setPhone(phoneValue)
    setIsPhoneEmpty(phoneValue === '')
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-border">
          <span className="popup-title">Tochka Records</span>
          <h2 className="form-header">Записать трек</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="title">Название трека: </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="author">Автор (Telegram ID): </label>
              <div className="author-input-container">
                <span className={`at-symbol ${isAuthorEmpty ? 'empty' : ''}`}>
                  @
                </span>
                <input
                  type="text"
                  id="author"
                  value={author}
                  onChange={handleAuthorChange}
                />
              </div>
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
