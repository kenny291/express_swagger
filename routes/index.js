var express = require('express');
var router = express.Router();

/* GET home page. */
// a middleware sub-stack shows request info 
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  // var responseText = 'Hello Express!<br>'
  // responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  // res.send(responseText)
  // next() next handler
});

module.exports = router;
