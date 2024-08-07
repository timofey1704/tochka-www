require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { sequelize } = require('./models/client')
const updateStatus = require('./cron/updateStatus')
const textsRoute = require('./routes/texts')
const sendMessageRoute = require('./routes/sendMessage')
const loginRoute = require('./routes/login')
const clientsRouter = require('./routes/clients')
const usersRouter = require('./routes/employees')
const requestRouter = require('./routes/requests')
const instrumentsRouter = require('./routes/instruments')
const scheduleRouter = require('./routes/schedule')
const authenticateToken = require('./middlewares/authMiddleware')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())

app.use('/api/texts', textsRoute)
app.use('/send-message', sendMessageRoute)
app.use('/login', loginRoute)
app.use('/track-record', authenticateToken, clientsRouter)
app.use('/employees', authenticateToken, usersRouter)
app.use('/requests', requestRouter)
app.use('/instruments', instrumentsRouter)
app.use('/schedule', scheduleRouter)

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
      updateStatus() // запуск cron задачи после успешной синхронизации
    })
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
