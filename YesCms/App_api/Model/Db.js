var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yesPlatform');
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected ');
    });
    mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
    });
    mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
    });
var post = require("./PostModel");