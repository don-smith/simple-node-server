var express = require('express')

var routes = require('./routes')

var server = express()

module.exports = server

server.use(express.static('public'))

server.get('/', routes.getHome)
