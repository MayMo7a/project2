// session.js are for logging in
var bcrypt = require('bcrypt');
var db = require('../db/config');

var session = {};

session.create = function(req, res, next){
    db.one("SELECT * FROM users WHERE name = $1;", [req.body.name])
    .then(function(result){
        if (bcrypt.compareSync(req.body.password, result.password)){
            req.session.user = result;
        }
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

session.delete = function(req, res, next){
    req.session.user = null;
    next();
}

module.exports= session;