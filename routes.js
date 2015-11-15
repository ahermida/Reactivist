/**
 * API Routes for HackHarvard
 */
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;
var multer      = require('multer');
var express     = require('express');
var bodyParser  = require('body-parser');
var router      = express.Router();
var url         = require('./config').mongouid;

console.log("MongoURI = " + url);


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/public/img');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".jpg");
    }
});

/** Upload Multer Handler (Setup) */
var upload = multer({ storage: storage });

/*

 Topics are overarching themes (think "Divesting from fossil fuels")
 Groups are local communities that are interested in that theme
 Events are special posts within a group which are a call to action
 Posts are posts within a group which are just discussion/other posts

 Topic > Group > Event / Post

 */
router.post('/upload', upload.single('Image') ,function(req, res) {
	debugger;
    res.json({'code': __dirname + '/public/img'});
});


router.use(bodyParser.json({limit: '20mb'}));
router.use(bodyParser.urlencoded({extended: true}));

router.get('/users/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('posts');
        collection.find({id:req.params.id}).toArray(function(err, result) {
            res.json({answer: result});
            db.close();
        });
    });
});

// Add's a user to the database
router.post('/users', function(req, res) {
    var user = req.body;
    console.log("Adding user: " + JSON.stringify(user));
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('users');
        collection.insert(user, function(err, result) {
            res.json({answer: result});
            db.close();
        });
    });
});

// Get all posts
router.get('/posts', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		var collection = db.collection('posts');
		collection.find({}).toArray(function(err, result) {
			res.json({answer: result});
			db.close();
		});
	});
});

// Get a specific group post by id
router.get('/posts/topic/group/:id', function(req, res) {
    MongoClient.connect(url, function(err, db) {
		  var collection = db.collection('posts');
		  collection.find({id:req.params.id}).toArray(function(err, result) {
			  res.json({answer: result});
			  db.close();
		  });
    });
});

// Get all of the groups for a topic
router.get('/groups/topic', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('groups');
        collection.find({}).toArray(function(err, result) {
            res.json({answer:result});
            db.close();
        });
    });
});

// Get all of the groups for a user
router.get('/groups', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('groups');
        collection.find({}).toArray(function(err, result) {
            res.json({answer:result});
            db.close();
        });
    });
});

router.get('/topics', function(req, res) {
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('topics');
        collection.find().toArray(function(err, result) {
            res.json(result);
            db.close();
        });
    });
});

router.post('/posts', function(req, res) {
    var post = req.body;
    console.log("Adding post: " + post);
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('posts');
        collection.insert(post, function(err, result) {
            res.json(result);
            db.close();
        });
    });
});

router.post('/topics', function(req, res) {
    var topic = req.body;
    console.log("Adding topic: " + JSON.stringify(topic));
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('topics');
        collection.insert(post, function(err, result) {
            res.json({answer: result});
            db.close();
        });
    });
});

router.post('/groups', function(req, res) {
    var group = req.body;
    console.log("Adding group: " + JSON.stringify(group));
    MongoClient.connect(url, function(err, db) {
        var collection = db.collection('groups');
        collection.insert(post, function(err, result) {
            res.json({answer: result});
            db.close();
        });
    });
});

module.exports = router;
