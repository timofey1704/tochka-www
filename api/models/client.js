const { Sequelize, DataTypes, Op } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const Client = sequelize.define(
  'client',
  {
    telegram_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    selected_admin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'null',
    },
  },
  {}
)

module.exports = { Client, sequelize, Op }
