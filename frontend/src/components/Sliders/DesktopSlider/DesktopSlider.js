import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'

const DesktopSlider = ({ images }) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation={true}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: '100%', height: 'auto' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DesktopSlider
