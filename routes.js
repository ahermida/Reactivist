/**
 * API Routes for HackHarvard
 */
var fs                = require('fs');
var config            = require('./config');
var multer            = require('multer');
var router            = express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, process.env.HOME + '/public');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + ".jpg");
    }
});

/** Upload Multer Handler (Setup) */
var upload = multer({ storage: storage });

router.get('/posts/:id', function(req, res) {
});

router.get('/posts/topic/:id', function(req, res) {
    
});

router.post('/posts/', function(req, res) {
    var post = req.body;
    console.log("Adding post: " + JSON.stringify(post));


});



module.exports = router;
