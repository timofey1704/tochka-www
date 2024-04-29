import React from 'react'
import { Link } from 'react-scroll'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import { animateScroll as scroll } from 'react-scroll'

const SliderNav = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
  }

  return (
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
        <Link to="sintesator" smooth={true} duration={500} className="nav-link">
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
  )
}

export default SliderNav
