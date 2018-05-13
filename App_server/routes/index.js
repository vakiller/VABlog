var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res) {
  res.sendFile('index.html',{root:'App_server/public'});
});
router.get('/post/:id',function(req,res,next){
  //console.log(req.params.id);
  res.sendFile('views/detailpost.html',{root:'App_server/public'});
});
module.exports = router;
