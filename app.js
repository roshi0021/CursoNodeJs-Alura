var app = require('./config/express')();
var porta = 3000;

app.listen(porta, function(){
  console.log("Server running at " + porta);
});
