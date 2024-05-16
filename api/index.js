require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const textsRoute = require('./routes/texts')
const sendMessageRoute = require('./routes/sendMessage')
const loginRoute = require('./routes/login')
const clientsRouter = require('./routes/clients')
const dashboardRouter = require('./routes/dashboard')
const authenticateToken = require('./middlewares/authMiddleware')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/texts', textsRoute)
app.use('/send-message', sendMessageRoute)
app.use('/login', loginRoute)
app.use('/track-record', clientsRouter)
app.use('/dashboard', authenticateToken, dashboardRouter)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
