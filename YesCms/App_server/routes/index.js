var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html');
});
router.get('/post/detail',function(req,res,next){
  res.sendfile('/views/postdetail.html');
});
module.exports = router;
