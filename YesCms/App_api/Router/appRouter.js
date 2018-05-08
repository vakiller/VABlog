//define 
var express = require('express');
var router = express.Router();
// controller
var PostC = require('../Controller/PostCtl');
//var AdminC = require('../Controller/AdminCtl');
// define router api app
router.get('/Posts/new',PostC.getRecent);
router.get('/Posts',PostC.getAll);
router.get('/Posts/:postID',PostC.getbyID);
router.post('/Posts',PostC.newPost);
router.put('/Posts/:postID',PostC.updatePost);
router.delete('/Posts/:postID',PostC.deletePost);
module.exports = router;
