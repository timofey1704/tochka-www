import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageSlider from '../../Sliders/ImageSlider'
import { NavLink } from 'react-router-dom'

const HomeContainer = ({ openPopup }) => {
  const [texts, setTexts] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const textPromises = []
        const imagePromises = []

        // Fetch texts with IDs from 2 to 17
        for (let i = 2; i <= 17; i++) {
          textPromises.push(axios.get(`http://localhost:4000/api/texts/${i}`))
        }

        // Fetch images for the slider
        imagePromises.push(/* Fetch images here */)

        const textResponses = await Promise.all(textPromises)
        const fetchedTexts = textResponses.map((response, index) => ({
          id: index + 2,
          text: response.data.text,
        }))
        setTexts(fetchedTexts)

        const imageResponses = await Promise.all(imagePromises)
        const fetchedImages = imageResponses.map((response) => response.data)
        setImages(fetchedImages)
      } catch (error) {
        console.error('Ошибка получения данных:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="home-container">
      {/* Track Record Title */}
      <div className="track-record-title" id="track-record">
        Запись трека
      </div>

      {/* Image Slider */}
      <div className="image-slider-container">
        <ImageSlider images={images} className="slide-image" />
      </div>

      {/* Track Record Description */}
      <div className="track-record-description">
        {texts.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>

      {/* App Track Record */}
      <div className="app-track-record">
        <button onClick={openPopup}>Записаться!</button>
      </div>

      {/* Track Record Price */}
      <div className="track-record-price">
        <NavLink to="/contacts">Стоимость</NavLink> от 400р / 2 часа
      </div>

      {/* Horizontal Divider */}
      <hr className="horizontal-divider" />
    </div>
  )
}

export default HomeContainer
