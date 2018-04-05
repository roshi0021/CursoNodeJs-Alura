module.exports = function(app){
  app.get("/produtos", function(req, res){
    console.log('Listando...');
<<<<<<< HEAD
=======
    var mysql = require('mysql');
    
>>>>>>> master
    res.render("produtos/lista");
  });
}
