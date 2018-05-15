// function component
var DB = require('../Model/Db');
var mongoose = require('mongoose');
var Post = mongoose.model('posts');
var sendJson = function (res,status,content)
{
    res.status(status);
    res.json(content);
}
// function router
module.exports.getRecent = function(req,res){
    Post.find().sort({"_id": -1}).limit(1).exec(function(err,post){
        if(err) 
        {
            sendJson(res,400,err);
            return;
        }
        if(!post)
        {
            sendJson(res,404,{"Mess" : "404 Not found"});
            return;
        }
        sendJson(res,200,post);
    });
};
module.exports.getAll = function(req,res){
    Post.find().exec(function(err,post){
        if(err) sendJson(res,400,err);
        sendJson(res,200,post);
    });
};
module.exports.getbyID = function(req,res){
    if(req.params && req.params.postID)
    {
        Post.findById(req.params.postID).exec(
            function(err,post){
                if(err)
                {
                    sendJson(res,400,err);
                    return;
                }
                if(!post)
                {
                    sendJson(res,404,{"Mess" : "404 Not Found"});
                    return;
                }
                sendJson(res,200,post);
            }   
        );
    }
    else
    {
        sendJson(res,400,{"Mess" : "Can't found the request"});
    }
};
module.exports.newPost = function(req,res){
    Post.create({
        author : [{
            name : req.body.name
        }],
        Tag : req.body.Tag,
        Content : req.body.Content
    },function(err,post){
        if(err) {
            sendJson(res,400,err);
            return;
        }
        sendJson(res,200,{"Mess" : "Publish the post sucessful!"});
    });
};
module.exports.updatePost = function(req,res){
    if(req.params && req.params.postID)
    {
        Post.findById(req.params.postID).exec(
            function(err,post){
                if(err)
                {
                    sendJson(res,400,err);
                    return;
                }
                if(!post)
                {
                    sendJson(res,404,{"Mess" : "404 Not Found"});
                    return;
                }
                if(req.body.name != null)
                {
                    Post.name = req.body.name
                }
                if(req.body.Tags != null)
                {
                    Post.Tag = req.body.Tag
                }
                if(req.body.Content != null)
                {
                    Post.Content = req.body.Content
                }
                Post.save(function(err){
                    if(err){
                        sendJson(res,400,err);
                        return;
                    }
                    sendJson(res,200,{"Mess": "Ok"});
                });
            }   
        );
    }
    else
    {
        sendJson(res,400,{"Mess" : "Can't found the request"});
    }
}; 
module.exports.deletePost = function(req,res){
    if(req.params && req.params.postID)
    {
        Post.findByIdAndRemove(req.params.postID).exec(
            function(err,post){
                if(err)
                {
                    sendJson(res,400,err);
                    return;
                }
                if(!post)
                {
                    sendJson(res,404,{"Mess" : "404 Not Found"});
                    return;
                }
                sendJson(res,200,{"Mess" : "Ok"});
            }   
        );
    }
    else
    {
        sendJson(res,400,{"Mess" : "Can't found the request"});
    }
};
module.exports.getHeaderImg = function(req,res){
    if(req.params && req.params.postID)
    {
        gfs.files.find({metadata : {_id_post : req.params.postID}}).toArray(function (err,files){
            if(err) console.log(err);
            console.log(files);
        })
    }
};