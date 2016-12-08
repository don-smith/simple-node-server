var path = require('path')

var db = require('./db')

module.exports = {
  getHome: getHome,
  getDynamic: getDynamic
}

function getHome (req, res) {
  var file = path.join(__dirname, 'home.html')
  res.sendFile(file)
}

function getDynamic (req, res) {
  res.render('dynamic', db.dynamic)
}
