const jwt = require('jsonwebtoken')

const authenticateToken = (req, res, next) => {
  // Получаем токен из заголовка Authorization
  const token = req.headers['authorization']

  if (token) {
    // Проверяем токен
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        // Если токен недействителен, отправляем ответ 401
        res
          .status(401)
          .json({ success: false, message: 'Недействительный токен' })
      } else {
        // Если токен действителен, сохраняем раскодированные данные в объекте запроса и переходим к следующему middleware
        req.user = decoded
        next()
      }
    })
  } else {
    // Если токен не предоставлен, отправляем ответ 401
    res.status(401).json({ success: false, message: 'Требуется токен доступа' })
  }
}

module.exports = authenticateToken
