'use strict'
const debug = require('debug')
module.exports = {
        database: process.env.DB_NAME || 'tesis',
        username: process.env.DB_USER || 'yoel',
        password: process.env.DB_PASS || 'yoel',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        logging: s => debug(s),
}
