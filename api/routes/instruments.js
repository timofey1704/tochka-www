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

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT x.id, x.name, x.image, x.description, x.link, array_agg(f.feature) AS features FROM public.instruments x LEFT JOIN public.featuresinst f ON x.id = f.instrument_id GROUP BY x.id;'
    )
    res.json(result.rows)
  } catch (error) {
    console.error(error)
    res.status(500).send('Server error')
  }
})

router.get('/listings/:link', async (req, res) => {
  const { link } = req.params
  try {
    const result = await pool.query('SELECT * FROM listings WHERE link = $1', [
      link,
    ])
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Listing not found!' })
    }
    res.json(result.rows[0])
  } catch (error) {
    console.error('Error fetching listing', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
