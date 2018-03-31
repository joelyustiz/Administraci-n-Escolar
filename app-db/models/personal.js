'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPersonalModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('personal', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cedula_escolar: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apellidos: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nombres: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sexo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    fecha_nacimiento: {
      type: Sequelize.DATE,
      allowNull: false
    },
    lugar_nacimiento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    direction: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    telefono: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
  })
}
