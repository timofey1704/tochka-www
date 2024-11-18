import React from 'react'
import BottomFormProvider from './BottomFormProvider'

const product = {
  name: 'Трек под ключ',

  images: [
    {
      src: 'https://i.ibb.co/RcFK3XS/swiper-Img3.jpg',
      alt: 'foto1',
    },
    {
      src: 'https://i.ibb.co/8xyBX8x/swiper-Img2.jpg',
      alt: 'foto2.',
    },
    {
      src: 'https://i.ibb.co/LnJPCxn/track-Record.png',
      alt: 'foto3',
    },
    {
      src: 'https://i.ibb.co/qys8Q73/swiper-Img1.jpg',
      alt: 'foto4',
    },
  ],

  description:
    'Мы предлагаем возможность выразить вашу индивидуальность через звук. Хотите создать что-то захватывающее? Начните с динамичного бита. Желаете удивить? Воспользуйтесь нашим эксклюзивным аранжировщиком. Нужна дополнительная яркость? Добавьте вокальные партии. Мы создадим трек, который подчеркнёт вашу уникальность и стиль.',
  highlights: [
    'Индивидуальный подход к каждому проекту',
    'Эксклюзивные аранжировки и биты',
    'Профессиональный микс и мастеринг',
    'Высококачественная запись вокала',
  ],
  details:
    'Наши услуги включают создание уникального трека с нуля: от разработки мелодии до финального мастеринга. Подпишитесь на нашу услугу и первыми получайте эксклюзивные треки и ремиксы, такие как наш грядущий релиз "Эпичный бит".',
}

const Bottom = () => {
  return (
    <div className="bg-white">
      <h2 className=" text-3xl font-bold tracking-tight text-center mt-8 text-gray-900 sm:text-4xl">
        Почему мы?
      </h2>
      <div className="pt-6">
        {/* картинки */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* информация */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* форма */}
          <div className="lg:row-span-3">
            <BottomFormProvider onClose={() => {}} />
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Преимущества работы с нами:</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">
                Преимущества работы с нами:
              </h3>

              <div className="mt-4">
                <ul className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Особенности</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bottom
