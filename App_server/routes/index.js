var express = require('express');
var path = require('path');
var router = express.Router();
var postCtl = require("../controller/postCtl.js");
/* GET home page. */
router.get('/index', function(req, res) {
  res.sendFile('index.html',{root:'App_server/public'});
});
router.get('/post/:id',function(req, res) {
  console.log(req.params.id);
  res.sendFile('detailpost.html',{root:'App_server/public/views'})});
module.exports = router;
