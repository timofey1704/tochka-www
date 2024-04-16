import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  addBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice'
import createBookWithID from '../../utils/createBookWithID'
import { setError } from '../../redux/slices/errorSlice'
// import booksData from '../../data/books.json'
// import './TrackForm.css'

const TrackForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
  const dispatch = useDispatch()

  // const handleAddRandomBook = () => {
  //   const randomIndex = Math.floor(Math.random() * booksData.length) // получение случайной книги от 1 до n где n = длина массива
  //   const randomBook = booksData[randomIndex]
  //   dispatch(addBook(createBookWithID(randomBook, 'Random'))) // получение действия типа ADD_BOOK с payload книгой с присвоенным ID
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (title && author) {
      const book = createBookWithID({ title, author }, 'Manual')
      dispatch(addBook(book))
      setTitle('')
      setAuthor('')
    } else {
      dispatch(setError('"Title" and "Author" fields can not be empty'))
    }
  }

  const handleAddRandomBookViaAPI = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
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
          onClick={handleAddRandomBookViaAPI}
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
