var express = require('express');
const { execSync } = require('child_process');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
execSync('python3 /root/filename.py');
  res.send('boom');
});

module.exports = router;
