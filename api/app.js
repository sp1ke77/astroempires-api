"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const index_1 = require('./routes/index');
const users_1 = require('./routes/users');
const login_1 = require('./routes/login');
const cookieParser = require('cookie-parser'); // this module doesn't use the ES6 default export yet
const app = express();
// view engine setup for testing
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', index_1.default);
app.use('/users', users_1.default);
app.use('/login', login_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((error, req, res, next) => {
        res.status(error['status'] || 500);
        res.render('error', {
            message: error.message,
            error
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((error, req, res, next) => {
    res.status(error['status'] || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
    return null;
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = app;
//# sourceMappingURL=app.js.map