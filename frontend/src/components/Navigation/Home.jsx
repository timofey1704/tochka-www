import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
// eslint-disable-next-line
import { Link, animateScroll as scroll } from 'react-scroll'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
  }
  return (
    <>
      <div>
        <Slider {...settings} className="page-nav">
          <Link
            to="track-record"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Запись трека
          </Link>
          <Link to="udarnie" smooth={true} duration={500} className="nav-link">
            Ударные
          </Link>
          <Link
            to="sintesator"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Синтезаторы
          </Link>
          <Link
            to="bass-guitar"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Бас-гитары
          </Link>
          <Link to="kardan" smooth={true} duration={500} className="nav-link">
            Кардан
          </Link>
        </Slider>
      </div>
      <div className="home-container">
        <div className="track-record-title" id="track-record">
          Запись трека
        </div>
        <div className="image-slider-container">
          <ImageSlider images={images} className="slide-image" />
        </div>
        <div className="track-record-description">
          <p>
            В нашей студии звукозаписи каждая нота находит свой путь к
            совершенству. Мы обеспечиваем профессиональное звучание вашей
            музыке, используя только лучшее оборудование и передовые технологии.
            Наши звукоинженеры воплощают в жизнь любые ваши идеи, от первых
            аккордов до финального мастеринга. Запишите свой трек у нас и
            позвольте вашему творчеству зазвучать на весь мир!
          </p>
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
          <p>
            В ритме каждого сердцебиения, в каждом звуке, затаиваются мечты и
            эмоции. Ударные инструменты - душа ритма, сердце музыки. И когда
            речь заходит о профессиональной ударной установке, Pearl выходит
            вперед, как символ качества и инноваций. Наша инструментальная база
            представляет собой не просто коллекцию барабанов и тарелок, она -
            воплощение стиля и мощи.
          </p>

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
          <p>
            Добро пожаловать в нашу звукозаписывающую студию, где мы
            предоставляем вам доступ к самой передовой инструментальной базе
            синтезаторов. Наша студия оснащена широким ассортиментом
            синтезаторов, от классических аналоговых моделей до современных
            цифровых инструментов, готовых воплотить ваши музыкальные идеи в
            жизнь. Наша цель - обеспечить вас всем необходимым для создания
            выдающихся звукозаписей. Мы предлагаем не только самые современные
            синтезаторы, но и профессиональное оборудование и экспертную
            поддержку наших звукорежиссеров и продюсеров.
          </p>
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>
                В нашей студии вы найдете все, что нужно для полного воплощения
                вашего музыкального видения. Независимо от того, создаете ли вы
                электронную музыку, саундтреки для фильмов, аудиорекламу или
                любую другую форму аудиоискусства, наши синтезаторы станут
                надежным и вдохновляющим инструментом в вашем творчестве.
              </p>

              <p>
                Мы также предлагаем гибкие условия аренды студии, чтобы
                соответствовать вашему графику и бюджету. Наша команда всегда
                готова помочь вам воплотить ваши музыкальные идеи в реальность,
                обеспечивая вас всем необходимым для успешной звукозаписи.
              </p>
              <p>
                Выберите нашу звукозаписывающую студию с синтезаторами в
                качестве вашего творческого партнера, и давайте вместе создадим
                что-то удивительное. Ваша музыка заслуживает самого лучшего, и
                мы здесь, чтобы обеспечить вас этим.
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
          <p>
            Добро пожаловать в нашу звукозаписывающую студию, где мы предлагаем
            вам доступ к нашей впечатляющей инструментальной базе бас-гитар. Мы
            гордимся тем, что предоставляем музыкантам возможность работать с
            самыми качественными и разнообразными инструментами, которые
            подчеркнут уникальность вашего звучания.
          </p>
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>
                В нашей студии вы найдете широкий выбор бас-гитар, от
                классических моделей до современных инновационных дизайнов.
                Независимо от того, ищете ли вы глубокий и насыщенный бас для
                рока, мягкие и плавные звуки для джаза или энергичные ритмы для
                поп-музыки, у нас есть инструменты, которые подойдут именно под
                ваш проект.
              </p>

              <p>
                Мы также предлагаем услуги наших опытных звукорежиссеров и
                продюсеров, которые помогут вам достичь идеального звучания
                вашего баса. Наша команда готова поддержать вас на каждом этапе
                процесса записи, обеспечивая профессиональное качество и
                внимательное отношение к вашему творчеству.
              </p>
              <p>
                Мы ценим ваше стремление к качественной музыке, поэтому
                предлагаем гибкие условия аренды студии, чтобы соответствовать
                вашим потребностям и бюджету. Выберите нашу звукозаписывающую
                студию с бас-гитарами в качестве вашего творческого партнера, и
                вместе мы создадим незабываемую музыку, которая будет звучать
                ярко и запоминающе.
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
          <p>
            Добро пожаловать в нашу звукозаписывающую студию, где мы гордимся
            нашей впечатляющей инструментальной базой карданов. Кардан – это
            инструмент, который придает вашей музыке особую глубину и характер,
            и мы рады предоставить вам доступ к лучшим образцам этого
            уникального инструмента.
          </p>
          {!showMore && (
            <button onClick={toggleShowMore} className="show-more-button">
              <u>Узнать больше</u>
            </button>
          )}

          {showMore && (
            <div className="additional-content">
              <p>
                Наша студия оснащена широким ассортиментом карданов,
                представленных в различных формах и конфигурациях. От
                классических деревянных до современных композитных моделей, у
                нас есть инструменты, которые подойдут для широкого спектра
                музыкальных жанров и стилей.
              </p>

              <p>
                Помимо высококачественных инструментов, мы также предоставляем
                услуги наших опытных звукорежиссеров и инженеров звука, чтобы
                обеспечить вас всем необходимым для успешной звукозаписи. Наша
                студия создана для воплощения ваших творческих идей в
                реальность, предоставляя вам самые лучшие инструменты и
                профессиональную поддержку.
              </p>
              <p>
                Выберите нашу звукозаписывающую студию с карданами в качестве
                вашего творческого партнера, и давайте вместе создадим музыку,
                которая будет вдохновлять и оставаться в памяти вашей аудитории.
                Ваше музыкальное видение заслуживает лучших инструментов, и мы
                здесь, чтобы обеспечить вас ими.
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
