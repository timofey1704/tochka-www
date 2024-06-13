const { Client, sequelize, Op } = require('../models/client')

async function updateStatus() {
  console.log('Cron job started: Updating client statuses')

  try {
    const todayDate = new Date().toISOString().split('T')[0] // текущая дата в формате YYYY-MM-DD
    console.log("Today's date:", todayDate) // сегодняшняя дата

    // Выберите записи для отладки
    const clientsToUpdate = await Client.findAll({
      where: {
        date: {
          [Op.lt]: todayDate,
        },
        status: {
          [Op.ne]: 'completed',
        },
      },
    })

    console.log(`Number of clients to update: ${clientsToUpdate.length}`)

    if (clientsToUpdate.length > 0) {
      // обновление статуса
      const [numberOfAffectedRows] = await Client.update(
        { status: 'completed', updatedAt: new Date() },
        {
          where: {
            date: {
              [Op.lt]: todayDate,
            },
            status: {
              [Op.ne]: 'completed',
            },
          },
        }
      )

      console.log(
        `Statuses updated successfully: ${numberOfAffectedRows} rows affected`
      )
    } else {
      console.log('No clients need to be updated')
    }
  } catch (error) {
    console.error('Error updating statuses:', error)
  }
}

module.exports = updateStatus
