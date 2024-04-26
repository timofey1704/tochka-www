import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import TrackFormPopup from '../TrackFormPopup/TrackFormPopup'
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
      <div className="page-nav">
        <a href="#track-record">Запись трека</a>
        <a href="#udarnie">Ударные</a>
      </div>
      <div className="home-container">
        <div className="track-record-title" id="track-record">
          Запись трека
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          В нашей студии звукозаписи каждая нота находит свой путь к
          совершенству. Мы обеспечиваем профессиональное звучание вашей музыке,
          используя только лучшее оборудование и передовые технологии. Наши
          звукоинженеры воплощают в жизнь любые ваши идеи, от первых аккордов до
          финального мастеринга. Запишите свой трек у нас и позвольте вашему
          творчеству зазвучать на весь мир!
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
          <span>
            В ритме каждого сердцебиения, в каждом звуке, затаиваются мечты и
            эмоции. Ударные инструменты - душа ритма, сердце музыки. И когда
            речь заходит о профессиональной ударной установке, Pearl выходит
            вперед, как символ качества и инноваций. Наша инструментальная база
            представляет собой не просто коллекцию барабанов и тарелок, она -
            воплощение стиля и мощи.
          </span>

          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>
                От могучего бас-барабана до остроты хай-хэта, каждая деталь
                Pearl отличается безупречным звучанием и непревзойденной
                надежностью. Барабанные обручи SuperHoop II обеспечивают прочное
                и стабильное крепление кожаных головок, гарантируя высокое
                качество звучания на протяжении долгих лет эксплуатации.
                Технология OptiMount позволяет минимизировать контакт между
                барабаном и подвесной системой, обеспечивая максимальное
                резонансное пространство и улучшенную проекцию звука.
              </p>

              <p>
                Но Pearl - это не только звук, это искусство. Каждая деталь
                ударной установки проработана с особым вниманием к эргономике и
                дизайну, обеспечивая максимальный комфорт и удобство для
                музыканта во время выступлений и студийных сессий. Независимо от
                вашего стиля и жанра, Pearl предлагает широкий ассортимент
                конфигураций и опций настройки, позволяя каждому музыканту найти
                свой собственный, уникальный звук.
              </p>
              <p>
                Доверьтесь нам, чтобы ваша музыка взлетела на новые высоты,
                воссоздавая энергию и волнение, которые заставят ваше сердце
                биться в унисон с каждым ударом. Pearl - это не просто
                инструменты, это искусство создания музыки.
              </p>
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
          <NavLink to="/contacts">Стоимость</NavLink> от 400р / 2 часа
        </div>
      </div>
    </>
  )
}

export default Home
