import {
  UserGroupIcon,
  WalletIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/20/solid'
import { FiHeadphones, FiSettings, FiMusic } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const features = [
  {
    name: 'Дружелюбное комьюнити',
    description:
      'Мы всегда готовы придти на помощь по любым вопросам, а так же создаем внутреннее комьюнити, где все стараются помочь друг другу.',
    icon: UserGroupIcon,
  },
  {
    name: 'Низкие цены',
    description:
      'Цены на наши как основные, так и дополнительные услуги не являются высокими, мы стараемся сделать нашу студию доступной для всех.',
    icon: WalletIcon,
  },
  {
    name: 'Инструментальная база',
    description:
      'У нас есть большое количество инструментов, которые мы сдаем в аренду',
    icon: SpeakerWaveIcon,
  },
]

const services = [
  {
    name: 'Мастеринг',
    description:
      'Наши специалисты обеспечивают высококачественный мастеринг для достижения идеального звучания.',
    icon: <FiHeadphones />,
  },
  {
    name: 'Сведение',
    description:
      'Профессиональное сведение треков для создания сбалансированного и гармоничного звучания.',
    icon: <FiSettings />,
  },
  {
    name: 'Инструментальная база',
    description:
      'Широкий выбор инструменталов и семплов для любого жанра и стиля музыки.',
    icon: <FiMusic />,
  },
]

export default function About() {
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
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-blue-about-text">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
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

      <div className="container mx-auto px-4 py-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-center mb-8 text-gray-900 sm:text-4xl">
          Наши услуги
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center mb-4 text-4xl text-gray-500">
                {service.icon}
              </div>
              <h3 className="text-xl text-center font-semibold mb-4">
                {service.name}
              </h3>
              <p className="mt-3 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
