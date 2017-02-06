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
// router.get('/', function (req, res, next) {
//   res.send('index')
// })
//
// router.get('/api', function (req, res, next) {
//   res.send('api')
// })
//
// router.get('/api/twitter', function (req, res) {
//   res.render('pages/index')
//   // client.get('statuses/user_timeline', {screen_name: req.query.q}, function (error, tweets, response) {
//   //   res.send(tweets)
//   // })
// })

// router.post('/search', function (req, res) {
//   client.get('statuses/user_timeline', {screen_name: req.body.search}, function (error, tweets, response) {
//     res.send(response)
//   })
// })

router.get('/api/twitter', function (req, res) {
  client.get('statuses/user_timeline', function (error, tweets, response) {
    res.send(tweets)
  })
  // res.send('search')
})

module.exports = router
