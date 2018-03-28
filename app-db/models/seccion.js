'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupSeccionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('seccion', {
    type: {
      type: Sequelize.STRING,
      allowNull: false
    },
    value: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  })
}
