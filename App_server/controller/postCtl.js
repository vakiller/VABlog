var express = require('express');
var Request = require("request");
var http = require("http");
var baseUrl = "http://localhost:3000/api/";
var sendJson = function (res,content,status)
{
   // res.status(status);
    res.json(content);
}
module.exports.getByid = function(req,res){
    request_body = {
        url :  baseUrl + "Posts/"+req.params.id,
        method : 'GET'
    }
    Request(request_body,function(err,respone,body){
        if(err)
        {
          res.json(err);
          console.log(err);
        }
        else if(!body)
        {
            res.json({"Mess" : "404 not found"});
        }
        else
        {
            
        }
    });
};