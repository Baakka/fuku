var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	return res.send('removed feature');
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.sampleFile;

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv('/root/filename.py', function(err) {
    if (err)
      return res.status(500).send(err);

    res.send('File uploaded!');
  });
});

module.exports = router;
