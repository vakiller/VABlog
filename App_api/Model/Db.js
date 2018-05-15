var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://llean:vanh1902@vablog-mfv8r.mongodb.net/vaBlog');
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