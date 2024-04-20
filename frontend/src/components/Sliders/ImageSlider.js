import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './ImageSlider.css'

const PrevArrow = (props) => (
  <div className="slick-arrow slick-prev" onClick={props.onClick}>
    Prev
  </div>
)

const NextArrow = (props) => (
  <div className="slick-arrow slick-next" onClick={props.onClick}>
    Next
  </div>
)

export { PrevArrow, NextArrow }

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // десктоп и ниже
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // планшеты и ниже
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // мобилки
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className="slide-image">
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      ))}
    </Slider>
  )
}

export default ImageSlider
