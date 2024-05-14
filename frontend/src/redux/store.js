import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracksSlice'

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
})

export default store
