import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

// const features = [
//   { name: 'Бренд', description: 'Fender' },
//   { name: 'Модель', description: 'Stratocaster' },
//   { name: 'Материал корпуса', description: 'Ольха (Alder)' },
//   { name: 'Материал грифа', description: 'Клён (Maple)' },
//   { name: 'Мензура', description: '25.5 дюймов' },
//   { name: 'Цвет', description: 'Санбёрст (Sunburst)' },
// ]

// const headerTexts = [
//   {
//     header: 'Гитары',
//     description:
//       'Жемчужина коллекции - Fender Stratocaster: легенда звука и стиля. \\nСочетая высококачественные материалы и передовые технологии, она дарит музыкантам неповторимый звук и комфорт. \nFender Stratocaster - это история музыки, воплощенная в инструменте.',
//   },
// ]

// const images = [
//   {
//     src: 'https://sun9-45.userapi.com/impg/RGcWMj2MIiNBg7QJzZxe9wfT9BWIAU2de0T6Ug/ZdLzFrNZ1cM.jpg?size=604x604&quality=96&sign=8a59be23ee9f0c05c721f2b564f2af57&c_uniq_tag=Rr7izLkQF_GNTHhN2zvBrDLcrsluU0B8DaEQOprYFKc&type=album',
//     alt: 'Guitar one',
//   },
//   {
//     src: 'https://sun9-74.userapi.com/c9649/u142757109/148619681/x_907e81d0.jpg',
//     alt: 'Guitar two',
//   },
//   {
//     src: 'https://sun9-15.userapi.com/impf/c636717/v636717745/4f016/3fkwQCdkgg0.jpg?size=604x604&quality=96&sign=5b516f8a3c7ea339bb9a7c98a91f2718&type=album',
//     alt: 'Guitar three',
//   },
//   {
//     src: 'https://sun9-80.userapi.com/impg/_2pFvY_xTWwdbIVg8qpn6Tt_zlvfGCJUyxRa2g/waEvVvkQA5E.jpg?size=604x604&quality=95&sign=2f1cd9d341bdfb0af0a72fc53c4cda83&c_uniq_tag=yQ3YijsviGrEX3Jz00slkN9xYv9_0ge45Usy4xi3wWY&type=album',
//     alt: 'Guitar four',
//   },
// ]

const InstrumentalListing = () => {
  const { link } = useParams()
  const [instrument, setInstrument] = useState(null)

  useEffect(() => {
    const fetchInstrument = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/listings/${link}`
        )
        setInstrument(response.data)
      } catch (error) {
        console.error('Error fetching listing', error)
      }
    }
    fetchInstrument()
  }, [link])

  if (!instrument) {
    return <div>Loading...</div>
  }
  const { headerTexts, features, images } = instrument
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          {headerTexts.map((headerText, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {headerText.header}
              </h2>
              <p className="mt-4 text-gray-500 text-justify tracking-tight">
                {headerText.description}
              </p>
            </div>
          ))}

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature, index) => (
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
          {images.map((image, index) => (
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
