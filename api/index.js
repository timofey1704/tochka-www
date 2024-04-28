require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const textsRoute = require('./routes/texts')
const sendMessageRoute = require('./routes/sendMessage')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/texts', textsRoute)
app.use('/send-message', sendMessageRoute)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
