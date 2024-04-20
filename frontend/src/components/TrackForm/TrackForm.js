import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchTrack,
  selectIsLoadingViaAPI,
} from '../../redux/slices/tracksSlice'
import './TrackForm.css'
import { setError } from '../../redux/slices/errorSlice'

const TrackForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleTelegramRequest = () => {
    if (!title || !author || !genre) {
      dispatch(setError('Поля не могут быть пустыми!'))
      return
    }
    const trackDetails = {
      message: `Название трека: ${title}, Автор: ${author}, Жанр: ${genre}`,
    }
    dispatch(
      fetchTrack({
        url: 'http://localhost:4000/send-message',
        data: trackDetails,
      })
    )
  }

  return (
    <div className="app-block track-form">
      <h2 className="form-header">Записать трек</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="author">Автор трека: </label>
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
    </div>
  )
}

export default TrackForm
