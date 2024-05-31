import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const formatEvents = (data) => {
  return data.map((event) => {
    const start = new Date(event.date)
    const [startHours, startMinutes, startSeconds] = event.time
      .split(':')
      .map(Number)
    start.setHours(startHours, startMinutes, startSeconds)

    const end = new Date(event.date)
    const [endHours, endMinutes, endSeconds] = event.end_time
      .split(':')
      .map(Number)
    end.setHours(endHours, endMinutes, endSeconds)

    return {
      title: event.telegram_id,
      start,
      end,
    }
  })
}

const DashboardCalendar = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:4000/dashboard', {
          headers: { Authorization: token },
        })

        const formattedEvents = formatEvents(response.data)

        setEvents(formattedEvents)
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error)
      }
    }

    fetchEvents()
  }, [])

  const localizer = momentLocalizer(moment)

  const minTime = new Date()
  minTime.setHours(12, 0, 0)

  const maxTime = new Date()
  maxTime.setHours(23, 0, 0)

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        min={minTime}
        max={maxTime}
        defaultView={Views.WEEK}
        messages={{
          date: 'Дата',
          time: 'Время',
          event: 'Событие',
          allDay: 'Весь день',
          week: 'Неделя',
          work_week: 'Рабочая неделя',
          day: 'День',
          month: 'Месяц',
          previous: 'Назад',
          next: 'Вперёд',
          yesterday: 'Вчера',
          tomorrow: 'Завтра',
          today: 'Сегодня',
          agenda: 'Повестка дня',
          noEventsInRange: 'Событий нет',
          showMore: (total) => `+ ещё ${total}`,
        }}
        style={{ margin: '50px' }}
      />
    </div>
  )
}

export default DashboardCalendar
