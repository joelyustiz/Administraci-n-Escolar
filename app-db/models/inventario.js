'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPersonalModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('inventario', {
    producto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cantidad: {
        type: Sequelize.STRING,
        allowNull: false
      },
  })
}