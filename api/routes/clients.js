const express = require('express')
const router = express.Router()
const { Pool } = require('pg')
const authenticateToken = require('../middlewares/authMiddleware')
const ExcelJS = require('exceljs')
const { Client, sequelize } = require('../models/client')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})
// обязательно нужно применять токен ко всем закрытым маршрутам, иначе 401

//отдаем всех клиентов
router.get('/', authenticateToken, async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM clients')

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Пользователей не найдено' })
    }
    res.json(result.rows) // отправленые данные клиенту
  } catch (error) {
    console.error('Ошибка выполнения запроса:', error)
    res.status(500).json({ error: 'Ошибка выполнения запроса' })
  }
})

// преобразуем общее количество часов в формат HH:MM
function convertToHoursMinutes(totalHours) {
  const totalMinutes = Math.floor(totalHours * 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

// получаем начало и конец текущего месяца
function getMonthStartEnd() {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth(), 1)
  const end = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0,
    23,
    59,
    59,
    999
  )
  return { start, end }
}

// вычисляем количество рабочих дней (пн-пт) в текущем месяце
function getWorkingDaysInMonth() {
  const { start, end } = getMonthStartEnd()
  let count = 0
  let current = start

  while (current <= end) {
    const dayOfWeek = current.getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      // Не воскресенье (0) и не суббота (6)
      count++
    }
    current.setDate(current.getDate() + 1)
  }

  return count
}

// данные для таблицы суперюзера в дашборде
router.get('/stats', async (req, res) => {
  try {
    const totalOrders = await Client.count()
    const pendingOrders = await Client.count({ where: { status: 'pending' } })
    const completedOrders = await Client.count({
      where: { status: 'completed' },
    })
    const cancelledOrders = await Client.count({
      where: { status: 'cancelled' },
    })
    const newOrders = await Client.count({ where: { date: new Date() } })

    const [workedHoursResult] = await sequelize.query(
      "SELECT SUM(EXTRACT(EPOCH FROM (end_time - time)) / 3600) AS hours FROM clients WHERE status = 'completed'"
    )

    const { start, end } = getMonthStartEnd()

    const [monthlyWorkedHoursResult] = await sequelize.query(
      `SELECT SUM(EXTRACT(EPOCH FROM (end_time - time)) / 3600) AS hours 
       FROM clients 
       WHERE status = 'completed' AND date >= :start AND date <= :end`,
      {
        replacements: { start, end },
        type: sequelize.QueryTypes.SELECT,
      }
    )

    const monthlyWorkedHours = monthlyWorkedHoursResult.hours || 0
    const formattedMonthlyWorkedHours =
      convertToHoursMinutes(monthlyWorkedHours)

    // вычисляем общее количество рабочих часов в текущем месяце
    const workingDaysInMonth = getWorkingDaysInMonth()
    const totalMonthlyWorkingHours = workingDaysInMonth * 8
    const formattedTotalMonthlyWorkingHours = convertToHoursMinutes(
      totalMonthlyWorkingHours
    )
    const persentageWT = (monthlyWorkedHours / totalMonthlyWorkingHours) * 100
    const formattedPersentageWT = persentageWT.toFixed(2)

    res.json({
      totalOrders,
      pendingOrders,
      completedOrders,
      cancelledOrders,
      newOrders,
      monthlyWorkedHours: formattedMonthlyWorkedHours,
      totalMonthlyWorkingHours: formattedTotalMonthlyWorkingHours,
      persentageWT: formattedPersentageWT,
    })
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

// отдаем данные для таблицы "Клиенты на прошлой неделе"
router.get('/prev-week', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect()
    const query = `
    SELECT *,
    to_char(time, 'HH24:MI') AS formatted_time
FROM clients
WHERE date >= current_date - interval '7 days'
AND date < current_date;
    `
    const result = await client.query(query)
    client.release()

    if (result.rows.length === 0) {
      return res.status(200).json([]) // нужно вернуть пустой массив чтобы фронт мог обработать
    }
    const formattedResults = result.rows.map((row) => {
      let date = new Date(row.date)
      return {
        ...row,
        date: date.toISOString().split('T')[0],
      }
    })

    res.status(200).json(formattedResults)
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

// отдаем данные для таблицы "Клиенты на следующей неделе"
router.get('/next-week', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect()
    const query = `
    SELECT *,
    to_char(time, 'HH24:MI') AS formatted_time
    FROM clients
    WHERE date >= current_date
    AND date < current_date + interval '8 days';
    `
    const result = await client.query(query)
    client.release()

    if (result.rows.length === 0) {
      return res.status(200).json([])
    }
    const formattedResults = result.rows.map((row) => {
      let date = new Date(row.date)
      return {
        ...row,
        date: date.toISOString().split('T')[0],
      }
    })

    res.status(200).json(formattedResults)
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

//экпорт в эксель предыдущей недели
router.get('/export-prev-week', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect()
    const query = `
      SELECT *,
      to_char(time, 'HH24:MI') AS formatted_time
      FROM clients
      WHERE date >= current_date - interval '7 days'
      AND date < current_date;
    `
    const result = await client.query(query)
    client.release()

    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Clients')

    worksheet.columns = [
      { header: 'Telegram ID', key: 'telegram_id', width: 32 },
      { header: 'Дата', key: 'date', width: 15 },
      { header: 'Время', key: 'formatted_time', width: 10 },
      { header: 'Телефон', key: 'phone', width: 32 },
    ]

    result.rows.forEach((row) => {
      let date = new Date(row.date)
      worksheet.addRow({
        ...row,
        date: date.toISOString().split('T')[0],
      })
    })

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=clients-prev-week.xlsx'
    )

    await workbook.xlsx.write(res)
    res.end()
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

//экспорт в эксель будущей недели
router.get('/export-next-week', authenticateToken, async (req, res) => {
  try {
    const client = await pool.connect()
    const query = `
      SELECT *,
      to_char(time, 'HH24:MI') AS formatted_time
      FROM clients
      WHERE date >= current_date
      AND date < current_date + interval '8 days';
    `
    const result = await client.query(query)
    client.release()

    const workbook = new ExcelJS.Workbook()
    const worksheet = workbook.addWorksheet('Clients')

    worksheet.columns = [
      { header: 'Telegram ID', key: 'telegram_id', width: 32 },
      { header: 'Дата', key: 'date', width: 15 },
      { header: 'Время', key: 'formatted_time', width: 10 },
      { header: 'Телефон', key: 'phone', width: 32 },
    ]

    result.rows.forEach((row) => {
      let date = new Date(row.date)
      worksheet.addRow({
        ...row,
        date: date.toISOString().split('T')[0],
      })
    })

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=clients-next-week.xlsx'
    )

    await workbook.xlsx.write(res)
    res.end()
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error)
    res.status(500).json({ error: 'Ошибка сервера' })
  }
})

module.exports = router
