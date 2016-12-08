var test = require('tape')
var cheerio = require('cheerio')
var request = require('supertest')

var server = require('../server')

test('/ returns an h1', function (t) {
  // act
  request(server)
    .get('/')
    .expect(200)
    .end(function (err, res) {
      // assert
      var $ = cheerio.load(res.text)
      t.ok($('h1').text().includes('cookin'), 'found h1')
      t.end()
    })
})
