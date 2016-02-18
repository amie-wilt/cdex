var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CommDefender' });
});

var data = [
  { name: 'Amie', age: 29 },
  { name: 'Dan', age: 30 }
];

router.get('/api/data', function(req, res, next) {
  res.json({ data: data });
});

router.post('/api/data', function(req, res, next) {
  var newData = req.body;
  data.push(newData);
  res.json(newData);
});

module.exports = router;
