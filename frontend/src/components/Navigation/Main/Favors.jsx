import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FiHeadphones, FiSettings, FiMusic } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const Favors = () => {
  const [favors, setFavors] = useState([])
  const iconMap = {
    FiHeadphones: <FiHeadphones />,
    FiSettings: <FiSettings />,
    FiMusic: <FiMusic />,
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/texts/favors'
        )
        setFavors(response.data)
      } catch (error) {
        console.error('Error fetching favors', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-center mb-8 text-gray-900 sm:text-4xl">
        Наши услуги
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {favors.map((favor) => (
          <div
            key={favor.id}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center justify-center mb-4 text-4xl text-gray-500 hover:text-blue-about-text">
              <NavLink to={favor.link}>{iconMap[favor.icon]}</NavLink>
            </div>
            <h3 className="text-xl text-center font-semibold mb-4 hover:text-blue-about-text">
              <NavLink to={favor.link}>{favor.name}</NavLink>
            </h3>
            <p className="mt-3 text-gray-600">{favor.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favors
