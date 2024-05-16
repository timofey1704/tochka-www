import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const formatEvents = (data) => {
  return data.map((event) => {
    const start = new Date(event.date)
    const [hours, minutes, seconds] = event.time.split(':').map(Number)
    start.setHours(hours, minutes, seconds)
    const end = new Date(start.getTime() + 60 * 60 * 1000) // 1 час в миллисекундах
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
  minTime.setHours(9, 0, 0)

  const maxTime = new Date()
  maxTime.setHours(19, 0, 0)

  return (
    <div style={{ height: '500px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        min={minTime}
        max={maxTime}
        style={{ margin: '50px' }}
      />
    </div>
  )
}

export default DashboardCalendar
