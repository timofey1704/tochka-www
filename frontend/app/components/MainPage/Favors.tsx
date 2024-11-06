import React from 'react'
import { FiHeadphones, FiSettings, FiMusic } from 'react-icons/fi'
import Link from 'next/link'
import { AboutData } from '@/app/types'
import { fetchFavors } from '@/lib/MainPage/fetchFavors'

const Favors = async () => {
  const favors: AboutData[] = await fetchFavors()

  const iconMap: Record<
    'FiHeadphones' | 'FiSettings' | 'FiMusic',
    React.ElementType
  > = {
    FiHeadphones,
    FiSettings,
    FiMusic,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-center mb-8 text-gray-900 sm:text-4xl">
        Наши услуги
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {favors.map((favor) => {
          const IconComponent = iconMap[favor.icon as keyof typeof iconMap]

          return (
            <div
              key={favor.id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4 text-4xl text-gray-500 hover:text-blue-700">
                <Link href={favor.link}>
                  {IconComponent ? <IconComponent /> : null}
                </Link>
              </div>
              <h3 className="text-xl text-center font-palanquin font-semibold mb-4 hover:text-blue-700">
                <Link href={favor.link}>{favor.name}</Link>
              </h3>
              <p className="mt-3 text-gray-600">{favor.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Favors
