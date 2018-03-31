'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupSeccionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('seccions', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    valor: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
