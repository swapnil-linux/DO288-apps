var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World Version2!\n');
});

app.listen(8080, function () {
  console.log('Example app V2 listening on port 8080!');
});
