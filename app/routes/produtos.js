module.exports = function(app){
  app.get("/produtos", function(req, res){
    console.log('Listando...');
    var mysql = require('mysql');
    
    res.render("produtos/lista");
  });
}
