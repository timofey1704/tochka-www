import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchTrack,
  selectIsLoadingViaAPI,
} from '../../redux/slices/tracksSlice'
import { setError } from '../../redux/slices/errorSlice'
import './TrackFormPopup.css'

const TrackFormPopup = ({ onClose }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [phone, setPhone] = useState('')
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthorEmpty, setIsAuthorEmpty] = useState(true)
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  const handleTelegramRequest = async () => {
    if (!title || !author || !phone) {
      dispatch(setError('Поля не могут быть пустыми!'))
      return
    }
    setIsLoading(true)
    const trackDetails = {
      message: `Название трека: ${title}, Автор: ${author}, Контактный номер: ${phone}`,
    }
    try {
      await dispatch(
        fetchTrack({
          url: 'http://localhost:4000/send-message',
          data: trackDetails,
        })
      )
      setIsLoading(false)
      onClose()
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
      setIsLoading(false)
      dispatch(setError('Произошла ошибка при отправке данных!'))
    }
  }

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value)
    setIsAuthorEmpty(e.target.value === '')
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
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              type="button"
              onClick={handleTelegramRequest}
              disabled={isLoadingViaAPI}
            >
              {isLoadingViaAPI ? (
                <>
                  <span>Отправка...</span>
                  <FaSpinner className="spinner" />
                </>
              ) : (
                'Написать нам!'
              )}
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
