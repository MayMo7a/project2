var express = require('express');
var router = express.Router();
var user = require('../models/user');
var auth = require('../middleware/auth');

router.get('/new', renderNew);

// move it to another route
router.get('/:id', auth.restrict, user.find, renderShow);

// fake login  
// router.post('/', user.create, redirectShow);
router.post('/', user.create, redirectShow);
router.get('/', renderLoginPage);

function renderLoginPage(req, res){
    res.render('./login'); 
  }


function redirectShow(req, res){
    // res.redirect(`/users/${res.locals.user_id}`);
    res.redirect(`../categories`);
}




function renderNew(req, res){
    res.render('./users/new');
}

function renderShow(req, res){
    var mustacheData = {
        user: res.locals.user
    }
    res.render('./users/show', mustacheData);
}

module.exports = router;