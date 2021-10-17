var express = require('express');
var app = express();
app.get('/:name', function (req, res) {
  res.send('hello' + req.params.name);
});
app.listen(80, function () {
  console.log('Example app listening on port 80!');
});