var express = require('express');
var router = express.Router();

var category = require('../models/category');
var hack = require('../models/hack');
var auth = require('../middleware/auth');

router.get('/', category.getAll, renderIndex);
router.get('/new', auth.restrict, renderNew);
router.get('/:id/edit', category.find, renderEdit);
router.get('/:id', category.find, hack.findByCategory, renderShow); //take us to show page in hack
router.post('/', category.create, redirectIndex);
router.put('/:id', category.update, redirectIndex);


function renderIndex(req, res){
    var mustacheData = {
        categories: res.locals.category
    }
    res.render('./categories/index', mustacheData);
}

function renderNew(req, res){
    res.render('./categories/new');
}

function renderShow(req, res){
    var mustacheData = {
        categories: res.locals.category,
        hacks: res.locals.hack
    }
    res.render('./hacks/show', mustacheData)
}

function renderEdit(req,res){
    var mustacheData = {
        categories: res.locals.category
    }
    res.render('./categories/edit', mustacheData)
}

function redirectIndex(req, res){
    res.redirect('/categories');
}



module.exports = router;