import React from 'react'
import InstrumentCard from '../components/InstrumentCard/InstrumentCard'
import { Instrument } from '../types'
import { fetchInstrumentsData } from '@/lib/InstrumentsPage/fetchInstumentsData'

const InstrumentalBase = async () => {
  const instruments: Instrument[] = await fetchInstrumentsData()

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
                className="text-blue-700 hover:underline"
                // onClick={openPopup}
              >
                воплотить ваши творческие идеи
              </button>{' '}
              в жизнь. Независимо от того, вы начинающий музыкант или опытный
              профессионал, у нас есть все необходимое для создания уникального
              звучания и выступлений высокого уровня.
            </section>

            <div className="grid pt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {instruments.length > 0 ? (
                instruments.map((instrument) => (
                  <InstrumentCard key={instrument.id} instrument={instrument} />
                ))
              ) : (
                <div className="text-center font-palanquin text-2xl text-white">
                  К сожалению, нам пока нечего вам предложить. Следите за
                  объявлениями!
                </div>
              )}
            </div>
          </div>
          <div className="mt-12"></div>
        </div>
      </main>
    </div>
  )
}

export default InstrumentalBase
