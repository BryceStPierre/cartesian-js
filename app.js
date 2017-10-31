var express = require('express');
var app = express();

app.use("/", express.static('test'));

app.listen(8080);
console.log('Test running at http://localhost:8080.');