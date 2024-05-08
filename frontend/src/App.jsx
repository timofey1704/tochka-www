import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Error from './components/Error/error'
import './App.css'
import Home from './components/Navigation/Home'
// import Photo from './components/Navigation/Photo'
import Contacts from './components/Navigation/Contacts'
import NotFound from './components/Navigation/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Contacts />} />
            {/* <Route path="photo" element={<Photo />} /> */}
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
