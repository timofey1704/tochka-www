import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
// import TrackForm from '../TrackForm/TrackForm'
import TrackFormPopup from '../TrackFormPopup/TrackFormPopup'
import './Home.css'
import swiperImg1 from '../../img/swiperImg1.jpeg'
import swiperImg2 from '../../img/swiperImg2.jpg'
import swiperImg3 from '../../img/swiperImg3.jpeg'
import swiperImg4 from '../../img/swiperImg4.jpeg'
import swiperImg9 from '../../img/swiperImg9.jpeg'
import swiperImg10 from '../../img/swiperImg10.jpeg'
import ImageSlider from '../Sliders/ImageSlider'
import trackRecord from '../../img/trackRecord.png'

const images = [
  swiperImg1,
  swiperImg2,
  swiperImg3,
  swiperImg4,
  swiperImg9,
  swiperImg10,
]

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <>
      <div>
        <ImageSlider images={images} className="slide-image" />
      </div>
      <div className="track-record">
        <div className="track-record-content">
          <div className="title-track-record">Запись трека</div>
          <div className="track-record-description">
            В нашей студии звукозаписи каждая нота находит свой путь к
            совершенству. Мы обеспечиваем профессиональное звучание вашей
            музыке, используя только лучшее оборудование и передовые технологии.
            Наши звукоинженеры воплощают в жизнь любые ваши идеи, от первых
            аккордов до финального мастеринга. Запишите свой трек у нас и
            позвольте вашему творчеству зазвучать на весь мир!
          </div>
          <div className="track-record-price">
            <NavLink to="/contacts">Цены</NavLink> от 400р / 2 часа!
          </div>
          <div className="app-track-record">
            <button onClick={openPopup}>Записаться!</button>
          </div>
        </div>

        <div className="track-record-img-container">
          <img src={trackRecord} alt="tracklogo" className="track-record-img" />
        </div>
      </div>
      <hr className="horizontal-divider" />
      {isPopupOpen && (
        <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
      )}{' '}
      {/* если попап открыт, рендерим его */}
    </>
  )
}

export default Home
