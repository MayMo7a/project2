var express = require('express');
var app = express();
var port = process.env.port || 3000;

// mustache config
var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// body parser config
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// logger config 
var logger = require('morgan');
app.use(logger('dev'));

// method override config 
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

// express session 
var session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

app.get('/', (req, res) => {
  res.render('./index');
})


var categoryController = require('./controllers/categoryController');
var userController = require('./controllers/userController');
var hackController = require('./controllers/hackController');
var sessionController = require('./controllers/sessionController')

//route controllers
app.use('/categories', categoryController);
app.use('/hacks', hackController);
app.use('/users', userController);
app.use('/login', sessionController);

// start the server!
app.listen(port, function () {
  console.log(`Express listening on localhost: ${port}`);
});

