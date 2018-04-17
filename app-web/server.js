'use strict'

const debug = require('debug')('platziverse:web')
const http = require('http')
const path = require('path')
const express = require('express')
const asyncify = require('express-asyncify')
const socketio = require('socket.io')
const chalk = require('chalk')

const { pipe } = require('./utils')
const { mqttHost } = require('./config')

const port = process.env.PORT || 8080
const app = asyncify(express())
const server = http.createServer(app)
const io = socketio(server)

function web() {
  // Step 1: Create & configure a webpack compiler
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.serv.config');
  var compiler = webpack(webpackConfig);
  app.use(require("webpack-dev-middleware")(compiler, {
    logLevel: 'warn', publicPath: webpackConfig.output.publicPath
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, { 
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000, reload:true
  }));
}
// console.log(process.env.NODE_ENV)
if(!process.env.NODE_ENV){
  web()
}
const db = require('../app-db')
const config = require('./config')

const api = asyncify(express.Router())

let services 
let estado = {}

app.get('/estado-inicial', async (req, res, next) => {
    
    console.log(`SERVICIOSSSS ${services}`)
    if (!services) {
      debug('Connecting to database')
      try {
        services = await db(config.db)
        estado.alumno = await services.Alumno.findAll()
        estado.seccion = await services.Seccion.findAll()
      } catch (e) {
        return next(e)
      }
    }
    estado.alumno = await services.Alumno.findAll()
    estado.seccion = await services.Seccion.findAll()
    res.json(estado)
  })
//api
app.use('/api/alumno', require('./api/alumno'))
app.use('/api/seccion', require('./api/seccion'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'data')))

//peticiones Get
app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
// Socket.io / WebSockets
io.on('connect', socket => {
  debug(`Connected ${socket.id}`)

  pipe(agent, socket)
})

// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
  console.log(`${chalk.green('[platziverse-web]')} server listening on port ${port}`)

})
