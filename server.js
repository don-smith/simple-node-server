var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')

var routes = require('./routes')

var server = express()

module.exports = server

server.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))

server.get('/', routes.getHome)
server.get('/dynamic', routes.getDynamic)
