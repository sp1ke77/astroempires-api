"use strict";
const express_1 = require('express');
const logout_1 = require('../automation/logout');
const logout = express_1.Router();
/* GET users listing. */
logout.post('/', function (req, res, next) {
    if ("token" in req.body) {
        logout_1.default(req.body.token)
            .then(function (status) {
            res.status(200).json({ "status": status });
        })
            .catch(function (error) {
            res.status(500).json({ error: 'Some error occurred: ' + error });
        });
    }
    else {
        res.status(500).json({ error: 'Missing token parameter!' });
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logout;
//# sourceMappingURL=logout.js.map