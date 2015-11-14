/**
 *  Food Classification 
 *  Authors: David Siah, Albert Hermida, 
 */
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var config      = require('./config');
var morgan      = require('morgan');
var routes      = require('./routes');
var fs          = require('fs');

//app.use(bodyParser.json({limit: '20mb'}));
//app.use(bodyParser.urlencoded({extended: true}));

/** Set Headers */
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });


/** Set Public Directory to Static */
app.use(express.static(__dirname + '/public'));

/** Just What They Say */
app.get('/', function(req, res) {
  res.json({'code drunk': 'compile sober'});
});

/** Log Requests */
app.use(morgan('dev'));

/** Import Routes */
app.use('/api', routes);

/* Client */
app.get('*', function(req, res) {
	res.send('hello');
});

/** Startup Server on config.port */
app.listen(config.port);
console.log('App running on http://localhost:' + config.port);
