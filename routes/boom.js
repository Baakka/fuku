var express = require('express');
const { execSync } = require('child_process');
var router = express.Router();

var command = 'no';

/* GET home page. */
router.post('/', function(req, res, next) {
  res.send(command);
});

router.get('/', function(req, res, next) {
	if (command == 'no')
	{
		command = 'yes';
  res.send('sending command to slaves...');
	}
	else
	{
		command = 'no';
  res.send('stoping slaves...');
	}

});
module.exports = router;
