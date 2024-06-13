const { Sequelize, DataTypes, Op } = require('sequelize')
require('dotenv').config()

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
  logging: true,
})

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
      defaultValue: 'pending',
    },
  },
  {
    timestamps: true,
  }
)

module.exports = { Client, sequelize, Op }
