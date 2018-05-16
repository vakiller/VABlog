var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var markdown = require("markdown").markdown;
var request = require("request-promise");

var indexRouter = require('./App_server/routes/index');
var usersRouter = require('./App_server/routes/users');
var appApiRouter = require('./App_api/Router/appRouter');
var adminRouter = require('./App_admin/Router/adminRouter');
var db = require('./App_api/Model/Db');
//var adminApiRouter = require('./App_api/Router/adminRouter');
var app = express();

// view engine setup
//app.set('views', path.join(__dirname,'App_server/public/','views'));
// app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'App_server/public')));
app.use('/static',express.static(path.join(__dirname,'App_admin/public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api',appApiRouter);
app.use('/admin',adminRouter);
// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
