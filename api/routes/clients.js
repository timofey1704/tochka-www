const express = require('express')
const router = express.Router()
const { Pool } = require('pg')
const authenticateToken = require('../middlewares/authMiddleware')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// отдаем данные для таблицы "Клиенты на прошлой неделе"
router.get('/prev-week', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect()
    const query = `
      SELECT *
      FROM clients
      WHERE date >= current_date - interval '7 days'
      AND date < current_date;
    `
    const result = await client.query(query)
    client.release()

    if (result.rows.length === 0) {
      return res.status(200).json([]) // нужно вернуть пустой массив чтобы фронт мог обработать
    }
    const formattedResults = result.rows.map((row) => {
      let date = new Date(row.date)
      return {
        ...row,
        date: date.toISOString().split('T')[0],
      }
    })

    res.status(200).json(formattedResults)
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

// отдаем данные для таблицы "Клиенты на следующей неделе"
router.get('/next-week', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect()
    const query = `
    SELECT *
    FROM clients
    WHERE date >= current_date
    AND date < current_date + interval '8 days';
    `
    const result = await client.query(query)
    client.release()

    if (result.rows.length === 0) {
      return res.status(200).json([])
    }
    const formattedResults = result.rows.map((row) => {
      let date = new Date(row.date)
      return {
        ...row,
        date: date.toISOString().split('T')[0],
      }
    })

    res.status(200).json(formattedResults)
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

module.exports = router
