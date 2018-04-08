
module.exports = function(app){
  app.get("/produtos", function(req, res){
    console.log('Listando...');

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.produtosDAO(connection);

    produtosDAO.lista(function(err, results){
      if(err){
        console.log(err);
        return
      }
      res.render('produtos/lista', {lista: results});
    });



    connection.end();
  });

  app.get("/produtos/form", function(req, res){
    console.log("Cheguei no form");
    res.render('produtos/form');

  });

  app.post("/produtos", function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.produtosDAO(connection);

    var produto = req.body;
    produtosDAO.salva(produto, function(err, results){
      if(err){
        console.log(err);
        return;
      }
      res.redirect('/produtos');
    })

    connection.end();

  });
}
