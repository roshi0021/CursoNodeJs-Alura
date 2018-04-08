
module.exports = function(app){
  app.get("/produtos", function(req, res){
    console.log('Listando...');

    var connection = app.infra.connectionFactory();

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
