"use strict";
var express_1 = require('express');
var index = express_1.Router();
/* GET home page. */
index.get('/', function (req, res, next) {
    res.render('index', { title: 'Visual Studio Code!' });
});
/* GET Quick Start. */
index.get('/quickstart', function (req, res, next) {
    res.render('quickstart');
});
exports.__esModule = true;
exports["default"] = index;
