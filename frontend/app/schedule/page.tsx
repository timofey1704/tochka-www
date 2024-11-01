'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'moment/locale/ru'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const formatEvents = (data: any) => {
  return data.map((event: any) => {
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
      title: 'Занято',
      start,
      end,
    }
  })
}

const Schedule = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/schedule', {})

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
    <div className="pt-24">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        min={minTime}
        max={maxTime}
        defaultView={Views.WEEK}
        views={['week']}
        toolbar={false}
        style={{ margin: '50px' }}
      />
    </div>
  )
}

export default Schedule
