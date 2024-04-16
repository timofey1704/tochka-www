import { configureStore } from '@reduxjs/toolkit'

import booksReducer from './slices/booksSlice'
import errorReducer from './slices/errorSlice'

const store = configureStore({
  reducer: {
    books: booksReducer,
    error: errorReducer,
  },
})

export default store
