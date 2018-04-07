module.exports = function(app){
  app.get("/produtos", function(req, res){
    console.log('Listando...');
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "casadocodigo_nodejs"
    });

    connection.query('select * from produtos', function(err, results){
      if(err){
        console.log(err);
        return
      }
      res.render('produtos/lista', {lista: results});
    });

    connection.end();
  });
}
