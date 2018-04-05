var app = require('./config/express')();
var porta = 3000;

var rotasProdutos = require('./app/routes/produtos')(app);

app.listen(porta, function(){
  console.log("Server running at " + porta);
});
