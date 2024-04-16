require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/send-message', async (req, res) => {
  const message = req.body.message
  if (!message) {
    return res.status(400).send('No message provided')
  }

  try {
    const response = await axios.post(
      `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_ID,
        text: message,
      }
    )

    res.send('Message sent successfully')
  } catch (error) {
    res.status(500).send('Failed to send message')
  }
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
