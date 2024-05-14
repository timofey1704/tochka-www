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

// Роут для обработки запроса на вход пользователя
router.post('/', async (req, res) => {
  const { username, password } = req.body

  try {
    // Выполняем запрос к базе данных для проверки логина и пароля
    const query =
      'SELECT * FROM users WHERE username = $1 AND password = $2 LIMIT 1'
    const result = await pool.query(query, [username, password])

    if (result.rows.length === 1) {
      // Если найден пользователь с такими данными, отправляем успех
      res.status(200).json({
        success: true,
        message: 'Авторизация успешна',
        user: result.rows[0],
      })
    } else {
      // Если пользователь не найден, отправляем ошибку
      res
        .status(401)
        .json({ success: false, message: 'Неверный логин или пароль' })
    }
  } catch (error) {
    console.error('Ошибка при выполнении запроса к базе данных:', error)
    res.status(500).json({ success: false, message: 'Ошибка при авторизации' })
  }
})

module.exports = router
