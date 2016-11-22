"use strict";
const express_1 = require('express');
const login_1 = require('../automation/login');
const login = express_1.Router();
/* GET users listing. */
login.post('/', function (req, res, next) {
    if ("email" in req.body && "password" in req.body) {
        login_1.default(req.body.email, req.body.password)
            .then(function (cookies) {
            res.status(200).json({ "token": cookies });
        })
            .catch(function (error) {
            res.status(500).json({ error: 'Some error occurred: ' + error });
        });
    }
    else {
        res.status(500).json({ error: 'Missing email or password parameter!' });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = login;
//# sourceMappingURL=login.js.map