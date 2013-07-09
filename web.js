var express = require("express"),
    fs = require('fs');
var app = express();
app.use(express.logger());

var index = fs.readFileSync('index.html');
var indexHTML = index.toString();

app.get('/', function(request, response) {
  response.send(indexHTML);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});