var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var porta = process.env.PORT || 3000;

app.set('io', io);

var server = http.listen(porta, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log("Server running at " + porta);
});
