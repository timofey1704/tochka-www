import { configureStore } from '@reduxjs/toolkit'
import tracksReducer from './slices/tracksSlice'
import authSlice from './slices/authSlice'
import notificationSlice from './slices/notificationSlice'

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    auth: authSlice,
    notification: notificationSlice,
  },
})

export default store
