import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TrackDescription = ({ id }) => {
  const [description, setDescription] = useState('')

  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/texts/${id}`
        )
        setDescription(response.data.text)
      } catch (error) {
        console.error('Ошибка при загрузке описания:', error)
      }
    }

    fetchDescription()
  }, [id])

  return <p>{description}</p>
}

export default TrackDescription
