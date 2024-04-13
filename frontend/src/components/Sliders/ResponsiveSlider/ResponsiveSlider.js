import React, { useState, useEffect } from 'react'
import MobileSlider from '../MobileSlider/MobileSlider'
import DesktopSlider from '../DesktopSlider/DesktopSlider'
import './ResponsiveSlider.css'

const ResponsiveSlider = ({ images }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {isDesktop ? (
        <DesktopSlider images={images} />
      ) : (
        <MobileSlider images={images} />
      )}
    </>
  )
}

export default ResponsiveSlider
