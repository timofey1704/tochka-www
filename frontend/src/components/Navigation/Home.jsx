import React from 'react'
import TrackForm from '../TrackForm/TrackForm'
import Filter from '../Filter/Filter'
import TrackList from '../TrackList/TrackList'

const Home = () => {
  return (
    <div>
      <div className="app-left-column">
        <TrackForm />
      </div>
      <div className="app-right-column">
        <Filter />
        <TrackList />
      </div>
    </div>
  )
}

export default Home
