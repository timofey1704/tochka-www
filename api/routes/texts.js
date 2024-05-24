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

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM texts')
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Текст не найден' })
    }
    res.json(result.rows)
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

router.get('/customers', async (req, res) => {
  try {
    const result = await pool.query('SELECT * from customers')
    if (result.rows.length === 0) {
      return res.status(200).json([])
    }
    res.json(result.rows)
  } catch (error) {
    console.error('Ошибка выполнения запроса кастомеров', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

router.get('/favors', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM favors')
    if (result.rows.length === 0) {
      return res.status(200).json([])
    }
    res.json(result.rows)
  } catch (error) {
    console.error('Ошибка выполнения запроса услуг', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

router.get('/about', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM features')
    if (result.rows.length === 0) {
      return res.status(200).json([])
    }
    res.json(result.rows)
  } catch (error) {
    console.error('Ошибка выполнения запроса фич', error)
    res.status(500), json({ error: 'Ошибка выполнения запроса' })
  }
})

module.exports = router
