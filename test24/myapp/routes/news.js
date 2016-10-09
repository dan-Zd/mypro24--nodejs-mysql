var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dex', function(req, res) {
  res.render('demo');
});

module.exports = router;