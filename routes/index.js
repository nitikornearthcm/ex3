var express = require('express');
var router = express.Router();
var connect = require("../config/database")
/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "select * from positions";
  connect.query(query, function(error,result){
    res.json(result)
  })
  
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'โครตโง่' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โครตโง่' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'โครตโง่' });
});

module.exports = router;
