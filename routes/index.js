var express = require('express')
var router = express.Router()
var Twitter = require('twitter')
var config = require('../config/config.json')

var client = new Twitter({
  consumer_key: config.api_key,
  consumer_secret: config.api_secret,
  access_token_key: config.access_token,
  access_token_secret: config.access_token_secret
})

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('index')
})

router.get('/api', function (req, res, next) {
  res.send('api')
})

router.get('/api/twitter', function (req, res) {
  client.get('statuses/user_timeline', {screen_name: req.query.q}, function (error, tweets, response) {
    res.send(tweets)
  })
})

module.exports = router
