'use strict'

const db = require('../')
const config = require('../config')
const uuid = require('uuid')
async function run () {
  const { Alumno, Seccion } = await db(config).catch(handleFatalError)

  const seccion = await Seccion.createOrUpdate({
    uuid:'yyz',
    nombre: 'araure',
    valor: 'Y'
  }).catch(handleFatalError)


  console.log('--Seccion--')
  console.log(seccion)


  const alumno = await Alumno.createOrUpdate(seccion.uuid, {
    uuid:'yyydfsdf',
    cedula_escolar: '123654',
    apellidos: 'test',
    nombres: 'test',
    sexo: 'h',
    edad: 4,
    fecha_nacimiento: new Date('December 17, 1995 03:24:00'),
    lugar_nacimiento:"Araure",
    nombre_representante:"testPadre",
    cedula_representante: "CedulaPadre",
    direction:"AraurePadre",
    telefono:"056459875",
  }).catch(handleFatalError)

  console.log('--Alumno creado--')
  console.log(alumno)

  const Alumnoss = await Alumno.findAll().catch(handleFatalError)
  console.log('--ALumnoss--')
  console.log(Alumnoss)

  const alumnosPorSeccion = await Alumno.findBySeccion(seccion.id)
  console.log('--ALumnoss Por Seccion--')
  console.log(alumnosPorSeccion)
 }

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()
