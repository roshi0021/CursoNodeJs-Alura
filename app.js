var express = require('express');
var app = express();
var porta = 3000;

app.set('view engine', 'ejs');

app.get("/produtos", function(req, res){
  console.log('Listando...');
  res.render("produtos/lista");
});

app.listen(porta, function(){
  console.log("Server running at " + porta);
});
