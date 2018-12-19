var db = require('../db/config');

var category = {};

category.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM categories;")
    .then(function(result){
        res.locals.category = result;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

category.find = function(req, res, next){
    db.one("SELECT * FROM categories WHERE id=$1;", [req.params.id])
    .then(function(result){
        res.locals.category = result;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

category.create = function(req, res, next){
    db.one(`INSERT INTO categories (title, image, user_id) VALUES ($1, $2, $3) RETURNING id;`, [req.body.title, req.body.image, req.session.user.id])
    .then(function(result){
        res.locals.category_id = result.id;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

category.update = function(req, res, next){
    db.none(`UPDATE categories SET title=$1, image=$2, user_id=$3 WHERE id=$4 RETURNING id;`, [req.body.title, req.body.image, req.session.user.id, req.params.id])
    .then(function(result){
        res.locals.category_id = result.id;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}
module.exports = category;