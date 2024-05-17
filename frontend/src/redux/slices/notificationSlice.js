import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {},
  reducers: {
    showSuccess: (state, action) => {
      const { message, position } = action.payload
      toast.success(message, { position })
    },
    showError: (state, action) => {
      const { message, position } = action.payload
      toast.error(message, { position })
    },
    showInfo: (state, action) => {
      const { message, icon, position } = action.payload
      const toastFunction = icon ? toast(icon) : toast
      const messageWithEmoji = icon ? `${icon} ${message}` : message
      toastFunction(messageWithEmoji, { position })
    },
  },
})

export const { showSuccess, showError, showInfo } = notificationSlice.actions

export default notificationSlice.reducer

//примеры использования:
// dispatch(showSuccess({ message: 'Вход выполнен успешно!', position: 'top-right' })) -- на успешное действие
// dispatch(showError({ message: 'Ошибка при входе!', position: 'bottom-center' })) -- на ошибку
// dispatch(showInfo({ message: 'Вход выполнен успешно!', emoji: '✅', position: 'top-right' })) -- обычное с эмодзи
// dispatch(showInfo({ message: 'Ошибка при входе!', position: 'bottom-center' })) -- обычное без эмозди
