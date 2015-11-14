/**
 * API Routes for HackHarvard
 */
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
var fs          = require('fs');
var config      = require('./config');
var multer      = require('multer');
var express     = require('express');
var router      = express.Router();
var url         = config.mongouid;

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.HOME + '/public/img');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".jpg");
    }
});

/** Upload Multer Handler (Setup) */
var upload = multer({ storage: storage });

router.get('/posts', function(req, res) {
	
	MongoClient.connect(url, function(err, db) {
		var collection = db.collection('posts');
		
		collection.find({}).toArray(function(err, result) {
			res.json({answer: result});
			db.close();
		});

		
	});
});

router.get('/posts/topic/:id', function(req, res) {
});

router.post('/posts/', function(req, res) {
    var post = req.body;
    console.log("Adding post: " + JSON.stringify(post));
});

module.exports = router;