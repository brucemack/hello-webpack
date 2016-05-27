// A trivial Node.JS (Express) server that responds to HTTP requests
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Make sure we can parse the posted JSON content:
app.use(bodyParser.json())

app.post('/rest/*',function (req, res) {
  console.log("Hit " + req.url,req.body);
  res.send({ text: req.body.name });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
