var app = require('./config/express')();
var porta = 3000;

app.get("/produtos", function(req, res){
  console.log('Listando...');
  res.render("produtos/lista");
});

app.listen(porta, function(){
  console.log("Server running at " + porta);
});
