import React from 'react'
import TrackForm from '../TrackForm/TrackForm'
import Filter from '../Filter/Filter'
import TrackList from '../TrackList/TrackList'
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
      <div className="studio-name">
        <div className="studio-name-one">TOCHKA</div>
        <div className="studio-name-two">STUDIO</div>
      </div>
      <div>
        <ImageSlider images={images} className="slide-image" />
      </div>

      <div className="track-record">
        <div className="track-record-content">
          <div className="title-track-record">Запись трека</div>
          <div className="track-record-description">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
          <div className="app-track-record">
            <TrackForm />
          </div>
          <div className="track-record-price">Цена xx/час</div>
        </div>
        <div className="track-record-img-container">
          <img src={trackRecord} alt="tracklogo" className="track-record-img" />
        </div>
      </div>

      <hr className="horizontal-divider" />

      <div className="app-right-column">
        <Filter />
        <TrackList />
      </div>
    </>
  )
}

export default Home
