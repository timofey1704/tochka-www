import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Error from './components/Error/error'
import './App.css'
import Home from './components/Navigation/Home'
import PasswordRecovery from './components/Navigation/Account/PasswordRecovery'
import Contacts from './components/Navigation/Contacts'
import NotFound from './components/Navigation/NotFound'
import Login from './components/Navigation/Account/Login'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Contacts />} />
            <Route path="login" element={<Login />} />
            <Route path="password-recovery" element={<PasswordRecovery />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="track-record" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>

      <div>
        <Error />
      </div>
    </BrowserRouter>
  )
}

export default App
