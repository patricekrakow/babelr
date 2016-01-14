var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/babelr.html');
});

http.listen(80, function() {
  console.log('Babelr listening on *:80');
});
