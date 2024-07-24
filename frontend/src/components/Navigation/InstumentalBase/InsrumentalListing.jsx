import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import NotFound from '../NotFound'

const InstrumentalListing = () => {
  const { link } = useParams()
  const [instrument, setInstrument] = useState([])
  const { headertexts, features, images, error } = instrument

  useEffect(() => {
    const fetchInstrument = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/instruments/listings/${link}`
        )
        setInstrument(response.data)
      } catch (error) {
        setInstrument((prevState) => ({ ...prevState, error: true }))
        console.error('Error fetching listing', error)
      }
    }
    fetchInstrument()
  }, [link])

  if (error) {
    return <NotFound />
  }

  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          {headertexts &&
            headertexts.map((headerText, index) => (
              <div key={index}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {headerText.header}
                </h2>
                <section className="mt-4 text-gray-500 text-justify tracking-tight">
                  {headerText.description}
                </section>
              </div>
            ))}

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features &&
              features.map((feature, index) => (
                <div key={index} className="border-t border-gray-200 pt-4">
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          {images &&
            images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg bg-gray-100"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default InstrumentalListing
