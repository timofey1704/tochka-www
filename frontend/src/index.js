import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../src/redux/store'
import './index.css'
import App from './App'
import setupAxiosInterceptors from './components/utils/AxiosInterceptor'

setupAxiosInterceptors(store)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
)
