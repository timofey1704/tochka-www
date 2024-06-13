const cron = require('node-cron')
const { Client, Op } = require('../models/client')

const schedule = process.env.CRON_SCHEDULE

const updateStatus = () => {
  cron.schedule(schedule, async () => {
    console.log('Cron job started: Updating client statuses')
    try {
      const today = new Date()
      const updatedRows = await Client.update(
        { status: 'completed' },
        {
          where: { date: { [Op.lt]: today }, status: { [Op.ne]: 'completed' } },
        }
      )
      console.log(`Statuses updated successfully: ${updatedRows} rows affected`)
    } catch (err) {
      console.error('Error updating statuses:', err.message)
    }
  })
}

module.exports = updateStatus
