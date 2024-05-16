require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const textsRoute = require('./routes/texts')
const sendMessageRoute = require('./routes/sendMessage')
const loginRoute = require('./routes/login')
const authenticateToken = require('./middlewares/authMiddleware')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/texts', textsRoute)
app.use('/send-message', sendMessageRoute)
app.use('/login', loginRoute)
app.get('/dashboard', authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ success: true, message: 'Доступ разрешен', user: req.user })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
