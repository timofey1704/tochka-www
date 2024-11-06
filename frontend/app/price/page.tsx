'use client'
import React, { useState } from 'react'
import LeadPopup from '../components/LeadPopup/TrackFormPopup'

const Price = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div className="bg-white py-8 sm:py-14">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl mb-8">
          Цены
        </h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Запись и мастеринг
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-gray-600">Услуга</th>
                  <th className="text-left text-gray-600">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Запись</td>
                  <td className="py-4">1000 руб/час</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Микширование</td>
                  <td className="py-4">1500 руб/час</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Мастеринг</td>
                  <td className="py-4">2000 руб/час</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Аренда инструментов
          </h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left text-gray-600">Инструмент</th>
                  <th className="text-left text-gray-600">Цена</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Электрогитара</td>
                  <td className="py-4">500 руб/час</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Барабанная установка</td>
                  <td className="py-4">700 руб/час</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Клавишные</td>
                  <td className="py-4">600 руб/час</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4">Микрофон</td>
                  <td className="py-4">300 руб/час</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-12 border-t border-gray-200 pt-4">
          <div className="text-center text-gray-600">
            Для получения дополнительной информации и бронирования, пожалуйста,{' '}
            <button
              className="text-blue-about-text hover:underline"
              onClick={openPopup}
            >
              свяжитесь с нами
            </button>{' '}
            {isPopupOpen && <LeadPopup onClose={() => setIsPopupOpen(false)} />}
            или по телефону{' '}
            <a
              href="tel:+79622504799"
              className="text-blue-about-text hover:underline"
            >
              +7 (962) 250-47-99
            </a>{' '}
            .
          </div>
        </div>
      </div>
    </div>
  )
}
export default Price
