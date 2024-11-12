import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from '../redux/slices/NotificationSlice'
import leadReducer from '../redux/slices/LeadSlice'

const store = configureStore({
  reducer: {
    notification: notificationReducer, //управление тостами
    leads: leadReducer, //управление лидами
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
