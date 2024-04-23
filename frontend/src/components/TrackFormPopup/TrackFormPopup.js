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
  const [genre, setGenre] = useState('')
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false)
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  const handleTelegramRequest = async () => {
    if (!title || !author || !genre) {
      dispatch(setError('Поля не могут быть пустыми!'))
      return
    }
    setIsLoading(true)
    const trackDetails = {
      message: `Название трека: ${title}, Автор: ${author}, Жанр: ${genre}`,
    }
    try {
      await dispatch(
        fetchTrack({
          url: 'http://localhost:4000/send-message',
          data: trackDetails,
        })
      )
      setIsLoading(false)
      onClose() // закрываем попап после успешной отправки данных
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
      setIsLoading(false)
      dispatch(setError('Произошла ошибка при отправке данных!'))
    }
  }

  return (
    <div className="popup-container">
      <div className="popup">
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
            <label htmlFor="author">Автор: </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div>
            <div>
              <label htmlFor="genre">Жанр: </label>
              <input
                type="text"
                id="genre"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
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
  )
}

export default TrackFormPopup
