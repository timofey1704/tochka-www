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
  const { telegram_id, date, time, phone } = req.body
  if (!telegram_id || !date || !time || !phone) {
    return res.status(400).json({ error: 'Все поля должны быть заполнены!' })
  }

  let client
  try {
    client = await pool.connect()
    const query =
      'INSERT INTO clients (telegram_id, date, time, phone) VALUES ($1, $2, $3, $4) RETURNING *'
    const values = [telegram_id, date, time, phone]
    const result = await client.query(query, values)

    res.status(201).json(result.rows[0])
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
