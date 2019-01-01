var db = require('../db/config');
var hack = {};

hack.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM hacks;")
    .then(function(result){
        res.locals.hack = result;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

hack.find = function(req, res, next){
    db.one(`SELECT * FROM hacks WHERE id=$1;`, [req.params.id])
    .then(function(result){
        res.locals.hack = result;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

hack.create = function(req, res, next){
    console.log(req.session)
    console.log('BODY', req.body)

    db.one(`INSERT INTO hacks (title, description, media, category_id, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING id;`,
    [req.body.title, req.body.description, req.body.media, req.body.category_id, req.session.user.id])
    .then(function(result){
        res.locals.hack_id = result.id;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })

}

hack.update = function(req, res, next){
    db.one(`UPDATE hacks SET title = $1, description = $2, media = $3, category_id = $4, user_id = $5 WHERE id = $6 RETURNING id;`,
    [req.body.title, req.body.description, req.body.media, req.body.category_id, req.session.user.id, req.params.id])
    .then(function(result){
        res.locals.hack_id = result.id;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

hack.delete = function(req, res, next){
    db.none(`DELETE FROM hacks WHERE id = $1;`, [req.params.id])
    .then(function(){
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })

}

hack.findByCategory =  function(req, res, next){
    db.manyOrNone(`SELECT * FROM hacks WHERE category_id = $1;`, [req.params.id])
    .then(function(result){
        res.locals.hack = result;
        next();
    })
    .catch(function(err){
        console.log(err);
        next();
    })
}

module.exports = hack;