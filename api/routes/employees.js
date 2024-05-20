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

// Получение всех пользователей
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users')
    if (result.rows.length === 0) {
      return res.status(200).json([]) // нужно вернуть пустой массив чтобы фронт мог обработать
    }
    res.status(200).json(result.rows) // Отправляем данные клиенту
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

// Обновление статуса пользователя
router.put('/:id/status', authenticateToken, async (req, res) => {
  const userId = req.params.id
  const { isActive } = req.body

  console.log('Received userId:', userId)
  console.log('Received isActive:', isActive)

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

module.exports = router
