const knex = require('knex')
const config = require('./knexfile')
const env = 'development'
// const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

module.exports = connection
