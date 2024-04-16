import { NavLink } from 'react-router-dom'
import React from 'react'
import TrackForm from '../TrackForm/TrackForm'

import './Home.css'
import swiperImg1 from '../../img/swiperImg1.jpeg'
import swiperImg2 from '../../img/swiperImg2.jpg'
import swiperImg3 from '../../img/swiperImg3.jpeg'
import ImageSlider from '../Sliders/ImageSlider'
import trackRecord from '../../img/trackRecord.png'

const images = [swiperImg1, swiperImg2, swiperImg3]

const Home = () => {
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
        </div>
        <div className="track-record-img-container">
          <img src={trackRecord} alt="tracklogo" className="track-record-img" />
        </div>
      </div>

      <hr className="horizontal-divider" />
      {/* стилизовать по центру */}
      <div className="home-bottom">
        <div className="app-track-record">
          <TrackForm />
        </div>
      </div>
    </>
  )
}

export default Home
