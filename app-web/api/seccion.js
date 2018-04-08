'use strict'

const debug = require('debug')('platziverse:web:seccion')
const express = require('express')
const asyncify = require('express-asyncify')

const db = require('../../app-db')

const config = require('../config')

const api = asyncify(express.Router())

let Seccion

api.use('*', async (req, res, next) => {
  let services
  if (!services) {
    debug('Connecting to database seccion')
    try {
      services = await db(config.db)
    } catch (e) {
      return next(e)
    }
    Seccion = services.Seccion
  }
  next()
})

api.get('/all-seccion', async (req, res, next) =>{
  debug('Buscando Todos las secciones...')
  let result = [] 
  try {      
      result = await Seccion.findAll()
  } catch (e) {
     
  }
  res.json(result)
})



module.exports = api
