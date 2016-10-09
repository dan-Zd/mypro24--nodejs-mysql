var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var userDao = require("../dao/userDao.js");
//var app = express();

/* GET users listing. */
router.get('/getList', function(req, res) {
  res.status(200);
  userDao.queryBynewstype(req, res);
});

router.post('/addNews', function(req, res) {
  userDao.add(req, res);
});
router.post('/editNews', function(req, res) {
  userDao.update(req, res);
});
router.post('/deleteNews', function(req, res) {
  userDao.delete(req, res);
});

module.exports = router;
