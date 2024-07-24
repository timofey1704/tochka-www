import React from 'react'
import { NavLink } from 'react-router-dom'

const InstrumentCard = ({ instrument }) => (
  <NavLink to={`/instrumental/${instrument.link}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl no-underline">
      <img
        src={instrument.image}
        alt={instrument.name}
        className="w-full h-full object-cover" //604x604
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{instrument.name}</h3>
        <section className="mt-2 text-gray-600">
          {instrument.description}
        </section>
        <ul className="mt-4 space-y-2">
          {instrument.features.map((feature, index) => (
            <li key={index} className="text-gray-600 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </NavLink>
)

export default InstrumentCard
