var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World Version2!</h1>\n');
});

app.listen(8080, function () {
  console.log('Example app V3.1 listening on port 8080!');
});
