
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
      res.format({
        html: function(){
          res.render('produtos/lista', {lista: results});
        },
        json: function(){
          res.json(results);
        }
      });
    });

    connection.end();
  });

  app.get("/produtos/form", function(req, res){
    console.log("Cheguei no form");
    res.render('produtos/form', {validationErrors: {}, produto: {}});

  });

  app.post("/produtos", function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.produtosDAO(connection);

    var produto = req.body;

    req.assert('titulo', 'Titulo é obrigatório').notEmpty();
    req.assert('preco', 'Preço precisa ser float').isFloat();

    var errors = req.validationErrors();
    if(errors){
      res.format({
        html: function(){
          res.status(400).render('produtos/form', {validationErrors: errors, produto:produto});
        },
        json: function(){
          res.status(400).json(errors);
        }
      });

      return;
    }

    produtosDAO.salva(produto, function(err, results){
      if(err){
        console.log(err);
        return;
      }
      res.redirect('/produtos');
    })

    connection.end();

  });

  app.get("/produtos/deletar/:id", function(req, res){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.produtosDAO(connection);

    var id = req.params.id;
    id = id.replace(":", "");

    console.log(id);
    produtosDAO.deleta(id, function(err, results){
      if(err){
        console.log(err);
      }
      res.redirect('/produtos');
    });

    connection.end();
  })
}
