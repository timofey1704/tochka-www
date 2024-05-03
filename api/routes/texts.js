const express = require('express')
const router = express.Router()
const { Pool } = require('pg')

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'postgres',
  password: 'qweasdZxCgit',
  port: 5432,
})

console.log('test')

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM texts')
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Текст не найден' })
    }
    res.json(result.rows) // Отправляем данные клиенту
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

module.exports = router
