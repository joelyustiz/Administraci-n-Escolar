'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAlumnoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('alumnos', {
    estado: {
      type: Sequelize.STRING,
      allowNull: true
    },
    cedula_escolar: {
      type: Sequelize.STRING,
      allowNull: true
    },
    apellidos: {
      type: Sequelize.STRING,
      allowNull: true
    },
    nombres: {
      type: Sequelize.STRING,
      allowNull: true
    },
    sexo: {
      type: Sequelize.STRING,
      allowNull: true
    },
    edad: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    fecha_nacimiento: {
      type: Sequelize.DATE,
      allowNull: true
    },
    lugar_nacimiento: {
      type: Sequelize.STRING,
      allowNull: true
    },
    nombre_representante: {
      type: Sequelize.STRING,
      allowNull: true
    },
    cedula_representante: {
      type: Sequelize.STRING,
      allowNull: true
    },
    direction: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    telefono: {
      type: Sequelize.STRING,
      allowNull: true
    },
  })
}
