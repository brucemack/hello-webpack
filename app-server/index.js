var express = require('express');
var app = express();

app.get('/rest/*',function (req, res) {
  console.log("Hit " + req.url);
  res.send({ text: "Hello World!" });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
