var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var porta = 3000;

app.set('io', io);

http.listen(porta, function(){
  console.log("Server running at " + porta);
});
