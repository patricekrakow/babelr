var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/babelr.html');
});

io.on('connection', function(socket) {
  var socket_id = socket.id;
  
  console.log('The socket ' + socket_id + ' has been established.');
  
  socket.on('disconnect', function(){
    console.log('The socket ' + socket_id + ' has been disconnected.');
  });
});

http.listen(80, function() {
  console.log('Babelr listening on *:80');
});
