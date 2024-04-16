import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracksSlice'
import errorReducer from './slices/errorSlice'

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    error: errorReducer,
  },
})

export default store
