"use strict";
var express_1 = require('express');
var users = express_1.Router();
/* GET users listing. */
users.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
exports.__esModule = true;
exports["default"] = users;
