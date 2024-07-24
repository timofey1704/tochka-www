import React, { useEffect, useState } from 'react'
import InstrumentCard from './InstrumentCard'
import TrackFormPopup from '../../TrackFormPopup/TrackFormPopup'
import axios from 'axios'

const InstrumentalBase = () => {
  const [instruments, setInstruments] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const response = await axios.get('http://localhost:4000/instruments')
        setInstruments(response.data)
      } catch (error) {
        console.error('Error fetching instruments', error)
      }
    }
    fetchInstruments()
  }, [])

  return (
    <div className="bg-gray-100 pt-24">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">
              Доступные инструменты
            </h2>
            <section className="text-gray-700 pb-3">
              В нашей инструментальной базе вы найдете широкий выбор
              профессионального музыкального оборудования, которое поможет вам{' '}
              <button
                className="text-blue-about-text hover:underline"
                onClick={openPopup}
              >
                воплотить ваши творческие идеи
              </button>{' '}
              в жизнь. Независимо от того, вы начинающий музыкант или опытный
              профессионал, у нас есть все необходимое для создания уникального
              звучания и выступлений высокого уровня.
            </section>
            {isPopupOpen && (
              <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
            )}
            <div className="grid pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {instruments.map((instrument) => (
                <InstrumentCard key={instrument.id} instrument={instrument} />
              ))}
            </div>
          </div>
          <div className="mt-12"></div>
        </div>
      </main>
    </div>
  )
}

export default InstrumentalBase
