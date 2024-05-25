import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { fetchTrack } from '../../../redux/slices/tracksSlice'
import { showSuccess, showError } from '../../../redux/slices/notificationSlice'
import ImageSlider from '../../Sliders/ImageSlider'

const instruments = [
  {
    name: 'Гитары',
    image: 'https://example.com/guitar.jpg',
    description:
      'Электрогитара с мощным звуком и широкими возможностями настройки.',
    features: [
      'Активные звукосниматели',
      'Корпус из красного дерева',
      '24 лада',
    ],
  },
  {
    name: 'Барабаны',
    image: 'https://example.com/drums.jpg',
    description: 'Полный комплект барабанов для студийной и концертной работы.',
    features: [
      'Березовые корпуса',
      'Высококачественные мембраны',
      'Регулируемые стойки',
    ],
  },
  {
    name: 'Синтезаторы',
    image: 'https://example.com/synthesizers.jpg',
    description:
      'Мощные синтезаторы для создания уникальных звуков и мелодий в любом жанре музыки.',
    features: [
      'Широкий выбор звуков и эффектов',
      'Удобный интерфейс ',
      'Встроенные метроном и секвенсор ',
    ],
  },

  {
    name: 'Кардан',
    image: 'https://example.com/cardan.jpg',
    description:
      'Профессиональные карданные соединения для передачи крутящего момента в различных механизмах и технических устройствах.',
    features: [
      'Высокая прочность и надежность ',
      'Снижение вибрации и шума в работе',
      'Широкий диапазон угловых перемещений',
    ],
  },
]

const InstrumentRequestForm = ({ onClose }) => {
  const [telegram_id, setTelegram_id] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [isTelegram_idEmpty, setIsTelegram_idEmpty] = useState(true)

  const dispatch = useDispatch()

  const handleTelegramRequest = async () => {
    if (!telegram_id || !phone || !date || !time) {
      toast.error('Поля не могут быть пустыми!', { icon: '❗️' })
      return
    }

    const trackDetails = {
      message: `Автор: @${telegram_id}, Дата: ${date}, Время: ${time}, Контактный номер: +${phone}, `,
    }
    const databaseDetails = {
      telegram_id,
      date,
      time,
      phone,
    }

    try {
      dispatch(
        fetchTrack({
          url: 'http://localhost:4000/send-message',
          data: trackDetails,
        })
      )

      dispatch(
        fetchTrack({
          url: 'http://localhost:4000/requests',
          data: databaseDetails,
        })
      )

      onClose()
      dispatch(
        showSuccess({
          message: 'Заявка успешно отправлена!',
          position: 'top-center',
        })
      )
    } catch (error) {
      console.error('Ошибка при отправке данных:', error)
      dispatch(
        showError({
          message: 'Ошибка при отправке данных!',
          position: 'top-center',
        })
      )
    }
  }

  const handleAuthorChange = (e) => {
    setTelegram_id(e.target.value)
    setIsTelegram_idEmpty(e.target.value === '')
  }

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value.replace(/\D/g, '')
    setPhone(phoneValue)
  }

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value)
    const today = new Date()
    const oneMonthFromToday = new Date()
    oneMonthFromToday.setMonth(today.getMonth() + 1)

    if (selectedDate < today) {
      toast.error('Нельзя записаться в прошлое', { icon: '🤪' })
      setDate('')
    } else if (selectedDate > oneMonthFromToday) {
      toast.error('Мы не проводим запись больше, чем на месяц вперед', {
        icon: '🤪',
      })
      setDate('')
    } else {
      setDate(e.target.value)
    }
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-6">
      <div>
        <label className="block text-gray-700 mb-2" htmlFor="telegramId">
          Ваш Telegram ID:
        </label>
        <div className="relative">
          <span
            className={`absolute left-3 top-2 text-gray-500 ${
              isTelegram_idEmpty ? 'empty' : ''
            }`}
          >
            @
          </span>
          <input
            type="text"
            id="telegramId"
            value={telegram_id}
            onChange={handleAuthorChange}
            className="pl-8 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 mb-2" htmlFor="date">
          Дата:
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={handleDateChange}
          className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2" htmlFor="time">
          Время:
        </label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 mb-2" htmlFor="phone">
          Контактный телефон:
        </label>
        <div className="relative">
          <InputMask
            mask="+7 (999) 999-99-99"
            placeholder="+7 (___) ___-__-__"
            type="text"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="px-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleTelegramRequest}
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
      >
        Записаться
      </button>
    </form>
  )
}

const InstrumentCard = ({ instrument }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={instrument.image}
      alt={instrument.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900">{instrument.name}</h3>
      <p className="mt-2 text-gray-600">{instrument.description}</p>
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
)

const InstrumentalBase = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Инструментальная база
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Доступные инструменты
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {instruments.map((instrument, index) => (
                <InstrumentCard key={index} instrument={instrument} />
              ))}
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Записаться:
            </h2>
            <InstrumentRequestForm onClose={() => {}} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default InstrumentalBase
