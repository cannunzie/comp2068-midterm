var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('../views/', function(req, res, next) {
  res.render('index', { title: 'My favourite people!' });
});

/* GET people page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'People' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

module.exports = router;