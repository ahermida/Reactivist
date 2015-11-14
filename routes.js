/**
 * API Routes for HackHarvard
 */
var fs                = require('fs');
var config            = require('./config');
var multer            = require('multer');

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

module.exports = function(express) {
  /* express router for /api routes */
  var router = express.Router();

  /** Export router to give Express access to routes */
  return router;
};
