var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World babe!');
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port 3000!');
});
