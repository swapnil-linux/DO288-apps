var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World Version4.0!</h1>\n');
});

app.listen(8080, function () {
  console.log('Example app V4.0 listening on port 8080!');
});
