import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import TrackFormPopup from '../TrackFormPopup/TrackFormPopup'
import TrackDescription from './HomeComponents/TrackDescription/TrackDescription'
import SliderNav from './HomeComponents/SliderNav/SliderNav'
import './Home.css'
import ImageSlider from '../Sliders/ImageSlider'
import swiperImg1 from '../../img/swiperImg1.jpeg'
import swiperImg2 from '../../img/swiperImg2.jpg'
import swiperImg3 from '../../img/swiperImg3.jpeg'
import swiperImg4 from '../../img/swiperImg4.jpeg'
import swiperImg9 from '../../img/swiperImg9.jpeg'
import swiperImg10 from '../../img/swiperImg10.jpeg'
import udarnie1 from '../../img/udarnie1.jpg'

const images = [
  swiperImg1,
  swiperImg2,
  swiperImg3,
  swiperImg4,
  swiperImg9,
  swiperImg10,
]

const imagesUdarnie = [udarnie1, swiperImg3, swiperImg2, swiperImg4]

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const openPopup = () => {
    setIsPopupOpen(true)
  }
  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <SliderNav />
      <div className="home-container">
        <div className="track-record-title" id="track-record">
          Запись трека
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          <TrackDescription id={2} />
        </div>
        <div className="app-track-record">
          <button onClick={openPopup}>Записаться!</button>
        </div>
        <div className="track-record-price">
          <NavLink to="/contacts">Стоимость</NavLink> от 400р / 2 часа
        </div>

        <hr className="horizontal-divider" />
        {isPopupOpen && (
          <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
        )}
      </div>

      <div className="home-container">
        <div className="track-record-title" id="udarnie">
          Наша инструментальная база: Ударные
        </div>
        <div className="image-slider-container">
          <ImageSlider images={imagesUdarnie} className="slide-image" />
        </div>
        <div className="track-record-description">
          <TrackDescription id={3} />

          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <TrackDescription id={4} />
              <TrackDescription id={5} />

              {showMore && (
                <button onClick={toggleShowMore} className="show-more-button">
                  <u>Скрыть текст</u>
                </button>
              )}
            </div>
          )}
        </div>

        <div className="app-track-record">
          <button onClick={openPopup}>Записаться!</button>
        </div>
        <div className="track-record-price">
          <NavLink to="/contacts">Стоимость</NavLink> допа от 100р / 2 часа
        </div>
      </div>
      <hr />
      <div className="home-container">
        <div className="track-record-title" id="sintesator">
          Наша инструментальная база: Синтезаторы
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          <TrackDescription id={6} />
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <TrackDescription id={7} />
              <TrackDescription id={8} />
              <TrackDescription id={9} />
              {showMore && (
                <button onClick={toggleShowMore} className="show-more-button">
                  <u>Скрыть текст</u>
                </button>
              )}
            </div>
          )}
        </div>
        <div className="app-track-record">
          <button onClick={openPopup}>Записаться!</button>
        </div>
        <div className="track-record-price">
          <NavLink to="/contacts">Стоимость</NavLink>допа от 100р / 2 часа
        </div>

        <hr className="horizontal-divider" />
        {isPopupOpen && (
          <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
        )}
      </div>

      <div className="home-container">
        <div className="track-record-title" id="bass-guitar">
          Наша инструментальная база: Бас-гитары
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          <TrackDescription id={10} />
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <TrackDescription id={11} />
              <TrackDescription id={12} />
              <TrackDescription id={13} />
              {showMore && (
                <button onClick={toggleShowMore} className="show-more-button">
                  <u>Скрыть текст</u>
                </button>
              )}
            </div>
          )}
        </div>
        <div className="app-track-record">
          <button onClick={openPopup}>Записаться!</button>
        </div>
        <div className="track-record-price">
          <NavLink to="/contacts">Стоимость</NavLink>допа от 100р / 2 часа
        </div>

        <hr className="horizontal-divider" />
        {isPopupOpen && (
          <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
        )}
      </div>

      <div className="home-container">
        <div className="track-record-title" id="kardan">
          Наша инструментальная база: Кардан
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          <TrackDescription id={14} />
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <TrackDescription id={15} />
              <TrackDescription id={16} />
              <TrackDescription id={17} />
              {showMore && (
                <button onClick={toggleShowMore} className="show-more-button">
                  <u>Скрыть текст</u>
                </button>
              )}
            </div>
          )}
        </div>
        <div className="app-track-record">
          <button onClick={openPopup}>Записаться!</button>
        </div>
        <div className="track-record-price">
          <NavLink to="/contacts">Стоимость</NavLink>допа от 50р / 2 часа
        </div>

        <hr className="horizontal-divider" />
        {isPopupOpen && (
          <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
        )}
      </div>
    </>
  )
}

export default Home
