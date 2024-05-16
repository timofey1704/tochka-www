const express = require('express')
const router = express.Router()
const { Pool } = require('pg')
const authenticateToken = require('../middlewares/authMiddleware') // Импорт middleware

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// обязательно нужно применять токен ко всем закрытым маршрутам, иначе 401
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients')

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Пользователей не найдено' })
    }
    res.json(result.rows) // отправленые данные клиенту
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

module.exports = router
