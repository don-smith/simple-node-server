var path = require('path')

module.exports = {
  getHome: getHome
}

function getHome (req, res) {
  var file = path.join(__dirname, 'home.html')
  res.sendFile(file)
}
