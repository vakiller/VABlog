var express = require('express');
var path = require('path');
var router = express.Router();
router.get('/',function(req,res){
    res.sendFile('index.html',{root : 'App_admin/public'});
});
module.exports = router;