var express = require('express');
var router = express.Router();
var keys = require('../public/javascripts/keys')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  console.log(keys.mashape)
});

module.exports = router;
