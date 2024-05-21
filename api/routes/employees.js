const express = require('express')
const router = express.Router()
const { Pool } = require('pg')
const bcrypt = require('bcrypt')
const authenticateToken = require('../middlewares/authMiddleware')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// получение всех админов
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users')
    if (result.rows.length === 0) {
      return res.status(200).json([]) // нужно вернуть пустой массив чтобы фронт мог обработать
    }
    res.status(200).json(result.rows)
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

// обновление статуса админа
router.put('/:id/status', authenticateToken, async (req, res) => {
  const userId = req.params.id
  const { isActive } = req.body

  if (typeof isActive !== 'boolean') {
    return res.status(400).json({ error: 'Invalid isActive value' })
  }

  try {
    const result = await pool.query(
      'UPDATE users SET is_active = $1 WHERE user_id = $2 RETURNING *',
      [isActive, userId]
    )

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json(result.rows[0])
  } catch (error) {
    console.error('Error updating user status:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// добавление нового админа
router.post('/add-admin', authenticateToken, async (req, res) => {
  const { username, password, email } = req.body

  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Поля не могут быть пустыми' })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await pool.query(
      'INSERT INTO users (is_active, username, password, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [true, username, hashedPassword, email]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Не получилось добавить админа', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

module.exports = router
