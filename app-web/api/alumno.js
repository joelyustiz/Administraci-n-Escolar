'use strict'
const debug = require('debug')('platziverse:api:alumnos')
const express = require('express')
const asyncify = require('express-asyncify')

const db = require('../../app-db')
const config = require('../config')

const api = asyncify(express.Router())

let Alumno
api.use('*', async (req, res, next) => {
    let services
    if (!services) {
      debug('Connecting to database')
      try {
        services = await db(config.db)
      } catch (e) {
        return next(e)
      }
  
      Alumno = services.Alumno
    }
    next()
  })
api.get('/all-alumnos', async (req, res, next) =>{
    debug('Buscando Todos los alumnos...')
    let result = [] 
    try {      
        result = await Alumno.findAll()
    } catch (e) {
       
    }
    res.json(result)
  })

module.exports = api