import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage' // это localStorage, если нужен SessionStorage, то нужно импортировать его
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'
import tracksSlice from './slices/tracksSlice'
import authSlice from './slices/authSlice'
import notificationSlice from './slices/notificationSlice'

// еастройка персистента
const persistConfig = {
  key: 'root',
  storage,
}

// комбинирование редюсеров
const rootReducer = combineReducers({
  tracks: tracksSlice,
  auth: authSlice,
  notification: notificationSlice,
})

// персистентный редюсер
const persistedReducer = persistReducer(persistConfig, rootReducer)

// конфигурация хранилища -- старый стор
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // игнорируем несериализуемые значения для действия persist
      ignoredActions: ['persist/PERSIST'],
    },
  }),
})

const persistor = persistStore(store)

export { store, persistor }
