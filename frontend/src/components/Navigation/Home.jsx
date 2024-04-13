import React from 'react'
import TrackForm from '../TrackForm/TrackForm'
import Filter from '../Filter/Filter'
import TrackList from '../TrackList/TrackList'
import './Home.css'
import swiperImg1 from '../../img/swiperImg1.jpeg'
import swiperImg2 from '../../img/swiperImg2.jpg'
import swiperImg3 from '../../img/swiperImg3.jpeg'
import ResponsiveSlider from '../Sliders/ResponsiveSlider/ResponsiveSlider'

const images = [swiperImg1, swiperImg2, swiperImg3]

const Home = () => {
  return (
    <>
      <div className="studio-name">
        <div className="studio-name-one">TOCHKA</div>
        <div className="studio-name-two">STUDIO</div>
      </div>
      <div>
        <ResponsiveSlider images={images} />
      </div>

      <div>
        <div className="app-left-column">
          <TrackForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <TrackList />
        </div>
      </div>
    </>
  )
}

export default Home
