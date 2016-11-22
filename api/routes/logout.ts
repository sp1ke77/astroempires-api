import {Router} from 'express';
import nmlogout from '../automation/logout'

const logout = Router();

/* GET users listing. */
logout.post('/', function(req, res, next) {
    if("token" in req.body) {
        nmlogout(req.body.token)
        .then(function (status) {
            res.status(200).json({"status": status});
        })
        .catch(function (error) {
            res.status(500).json({error: 'Some error occurred: ' + error});
        });
    } else {
        res.status(500).json({error: 'Missing token parameter!' });
    }
});

export default logout;
