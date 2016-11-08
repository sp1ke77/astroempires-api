"use strict";
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var index_1 = require('./routes/index');
var users_1 = require('./routes/users');
var cookieParser = require('cookie-parser'); // this module doesn't use the ES6 default export yet
var app = express();
// view engine setup for testing
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', index_1["default"]);
app.use('/users', users_1["default"]);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (error, req, res, next) {
        res.status(error['status'] || 500);
        res.render('error', {
            message: error.message,
            error: error
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (error, req, res, next) {
    res.status(error['status'] || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
    return null;
});
exports.__esModule = true;
exports["default"] = app;
