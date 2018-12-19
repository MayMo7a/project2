//user.js is for creating a new user
var bcrypt = require('bcrypt');
var db = require('../db/config');

var user = {};

user.find = function(req, res, next){
    db.one("SELECT * FROM users WHERE id=$1;", [req.params.id])
    .then(function(result){
        res.locals.user = result;
        console.log(result); 
        next();
    })
    .catch(function(error){
        console.log(error);
        next();
    })
}

user.create = function(req, res, next){
    db.one("INSERT INTO users (name, password, email) VALUES ($1,$2,$3) RETURNING *;",
        [req.body.name, bcrypt.hashSync(req.body.password, 10), req.body.email])
        .then(function(result){
            req.session.user = result;
            res.locals.user_id = result.id;
            next();
        })
        .catch(function(error){
            console.log(error);
            next();
        })
}


module.exports= user;