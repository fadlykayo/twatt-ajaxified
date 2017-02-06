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

router.get('/', function (req, res, next) {
  res.send('index')
})

router.get('/api', function (req, res, next) {
  res.send('api')
})

// router.post('/search', function (req, res) {
//   client.get('statuses/user_timeline', {screen_name: req.body.search}, function (error, tweets, response) {
//     res.send(response)
//   })
// })

router.post('/api/twitter', function (req, res) {
  client.post('statuses/update', {status: req.body.tweet}, function (error, tweets, response) {
    res.send(tweets)
  })
})

router.get('/api/twitter', function (req, res) {
  client.get('statuses/user_timeline', function (error, tweets, response) {
    res.send(tweets)
  })
})

module.exports = router
