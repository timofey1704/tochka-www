import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import MainLayout from './layouts/MainLayout'
import './App.css'
import Home from './components/Navigation/Home'
import PasswordRecovery from './components/Navigation/Account/PasswordRecovery'
import Contacts from './components/Navigation/Contacts'
import NotFound from './components/Navigation/NotFound'
import Login from './components/Navigation/Account/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Employees from './components/Dashboard/Employees'
import Clients from './components/Dashboard/Clients'

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Contacts />} />
              <Route path="login" element={<Login />} />
              <Route path="password-recovery" element={<PasswordRecovery />} />
              <Route path="/dashboard/home" element={<Dashboard />} />
              <Route path="/dashboard/employees" element={<Employees />} />
              <Route path="dashboard/clients" element={<Clients />} />
              <Route path="track-record" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
