import {Router} from 'express';
import nmlogin from '../automation/login'

const login = Router();

/* GET users listing. */
login.post('/', function(req, res, next) {
    if("email" in req.body && "password" in req.body) {
        nmlogin(req.body.email, req.body.password)
        .then(function (cookies) {
            res.status(200).json({"token": cookies});
        })
        .catch(function (error) {
            res.status(500).json({error: 'Some error occurred: ' + error});
        });
    } else {
        res.status(500).json({error: 'Missing email or password parameter!' });
    }
});

export default login;
