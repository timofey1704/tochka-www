import { NavLink } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TrackFormPopup from '../TrackFormPopup/TrackFormPopup'
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
  const [texts, setTexts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/texts')
      .then((response) => {
        setTexts(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Ошибка загрузки текстов:', error)
        setLoading(false)
      })
  }, [])

  const openPopup = () => {
    setIsPopupOpen(true)
  }
  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <>
      <hr />
      <div className="studio-name">
        <div className="studio-name-one">TOCHKA</div>
        <div className="studio-name-two">STUDIO</div>
      </div>

      <SliderNav />

      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="home-container">
            <div className="track-record-title">Запись трека</div>
            <div className="image-slider-container">
              <ImageSlider images={images} className="slide-image" />
            </div>
            <div className="track-record-description">
              <p>{texts.length > 0 && texts[8].text}</p>
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
        )}
      </>

      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="home-container">
            <div className="track-record-title" id="udarnie">
              Наша инструментальная база: Ударные
            </div>
            <div className="image-slider-container">
              <ImageSlider images={imagesUdarnie} className="slide-image" />
            </div>
            <div className="track-record-description">
              <p>{texts.length > 0 && texts[7].text}</p>

              {!showMore && (
                <button onClick={toggleShowMore} className="show-more-button">
                  <u>Узнать больше</u>
                </button>
              )}

              {showMore && (
                <div className="additional-content">
                  <p>{texts.length > 0 && texts[0].text}</p>
                  <p>{texts.length > 0 && texts[1].text}</p>

                  {showMore && (
                    <button
                      onClick={toggleShowMore}
                      className="show-more-button"
                    >
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
        )}
        <hr />
      </>

      <div className="home-container">
        <div className="track-record-title" id="sintesator">
          Наша инструментальная база: Синтезаторы
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          <p>{texts.length > 0 && texts[2].text}</p>
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>{texts.length > 0 && texts[3].text}</p>
              <p>{texts.length > 0 && texts[4].text}</p>
              <p>{texts.length > 0 && texts[5].text}</p>
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
          <p>{texts.length > 0 && texts[6].text}</p>
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>{texts.length > 0 && texts[9].text}</p>
              <p>{texts.length > 0 && texts[10].text}</p>
              <p>{texts.length > 0 && texts[11].text}</p>
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
          <p>{texts.length > 0 && texts[11].text}</p>
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>{texts.length > 0 && texts[12].text}</p>
              <p>{texts.length > 0 && texts[13].text}</p>
              <p>{texts.length > 0 && texts[14].text}</p>
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
