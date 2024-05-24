import {
  UserGroupIcon,
  WalletIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/20/solid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
  const [features, setFeatures] = useState([])
  const iconMap = {
    UserGroupIcon,
    WalletIcon,
    SpeakerWaveIcon,
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/texts/about'
        )
        setFeatures(response.data)
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="overflow-hidden bg-white py-8 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h1 className="text-base font-semibold text-blue-about-text leading-7 text-about-text">
                  Создавай прекрасное
                </h1>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Добро пожаловать в наше творческое пространство
                </p>
                <p className="mt-6 text-lg leading-8">
                  В нашей{' '}
                  <NavLink
                    className="text-blue-about-text hover:underline"
                    to="/instrumental"
                  >
                    студии звукозаписи
                  </NavLink>{' '}
                  каждая нота находит свой путь к совершенству. Мы считаем, что
                  нас стоит выбрать потому что:
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => {
                    const IconComponent = iconMap[feature.icon]
                    return (
                      <div key={feature.id} className="relative pl-9">
                        <dt className="inline font-semibold text-blue-about-text">
                          {IconComponent && (
                            <IconComponent
                              className="absolute left-1 top-1 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          <NavLink to={feature.link}>{feature.name}</NavLink>
                        </dt>{' '}
                        <dd className="inline">{feature.description}</dd>
                      </div>
                    )
                  })}
                </dl>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/4087997/pexels-photo-4087997.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </>
  )
}
