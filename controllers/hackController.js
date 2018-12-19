var express = require('express');
var router = express.Router();

var hack = require('../models/hack');
var category = require('../models/category');

router.get('/', hack.getAll, renderIndex);
router.get('/new', category.getAll, renderNew);
router.get('/:id', hack.find, renderShow);
router.get('/:id/edit', hack.find, category.getAll, renderEdit);
router.post('/', hack.create, redirectShow);
router.put('/:id', hack.update, redirectShow);
router.delete('/:id', hack.delete, redirectIndex);

//renderIndex
function renderIndex(req, res){
    var mustacheDate = {
        hacks: res.locals.hack
    }
    res.render('./hacks/index', mustacheDate);
}

//renderNew
function renderNew(req, res){
    var mustacheDate = {
        categories: res.locals.category
    }
    res.render('./hacks/new', mustacheDate);
}

//renderShow

function renderShow(req, res){
    var mustacheDate = {
        hacks: res.locals.hack
    }
    res.render('./hacks/show', mustacheDate);
}

//renderEdit
function renderEdit(req, res){
    var mustacheDate = {
        hacks: res.locals.hack,
        categories: res.locals.category
    }
    res.render('./hacks/edit', mustacheDate);
}

//redirectIndex
function redirectIndex(req, res){
    res.redirect('/hacks');
}
//redirectShow
function redirectShow(req, res){
    res.redirect(`/hacks/${res.locals.hack_id}`);
}

module.exports = router;