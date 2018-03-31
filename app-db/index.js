'use strict'

const setupDatabase = require('./lib/db')
const setupAlumnoModel = require('./models/alumno')
const setupSeccionModel = require('./models/seccion')
const setupPersonalModel = require('./models/personal')

const setupAlumno = require('./lib/alumno')
const setupSeccion = require('./lib/seccion')
const setupPersonal = require('./lib/personal')
const defaults = require('defaults')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)
  const AlumnoModel = setupAlumnoModel(config)
  const SeccionModel = setupSeccionModel(config)

  SeccionModel.hasMany(AlumnoModel)
  AlumnoModel.belongsTo(SeccionModel)

  await sequelize.authenticate()
  if (config.setup) {
    await sequelize.sync({ force: true })
  }
  

  const Alumno = setupAlumno(SeccionModel, AlumnoModel)
  const Seccion = setupSeccion(SeccionModel)

  return {
    Alumno,
    Seccion
  }
}
