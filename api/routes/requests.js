const express = require('express')
const router = express.Router()
const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

router.post('/', async (req, res) => {
  const { telegram_id, date, time, phone, end_time } = req.body
  if (!telegram_id || !date || !time || !phone | !end_time) {
    return res.status(400).json({ error: 'Все поля должны быть заполнены!' })
  }

  let client
  try {
    client = await pool.connect()

    // проверка занятости выбранного времени
    const checkQuery = 'SELECT * FROM clients WHERE date = $1 AND time = $2'
    const checkValues = [date, time]
    const checkResult = await client.query(checkQuery, checkValues)

    if (checkResult.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Выбранное время недоступно',
        reason: 'TIME_UNAVAILABLE',
      })
    }

    // добавление записи в базу
    const insertQuery =
      'INSERT INTO clients (telegram_id, date, time, phone, end_time) VALUES ($1, $2, $3, $4, $5) RETURNING *'
    const insertValues = [telegram_id, date, time, phone, end_time]
    const insertResult = await client.query(insertQuery, insertValues)

    res.status(201).json(insertResult.rows[0])
  } catch (error) {
    console.error('Ошибка при сохранении данных в базу:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  } finally {
    if (client) {
      client.release()
    }
  }
})

module.exports = router
