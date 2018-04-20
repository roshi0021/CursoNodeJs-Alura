var express = require('../config/express')();
var request = require('supertest')(express);

describe("#ProdutosController", function(){
  it('#lista de produtos json', function(done){
    request.get("/produtos")
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done);
    });

  it("#Cadastra produtos com dados invalidos", function(done) {
    request.post("/produtos")
    .send({titulo: "", descricao: "novo livro whatever"})
    .expect(400, done)
  });

  it("#Cadastro produtos com dados válidos", function(done){
    request.post("/produtos")
    .send({titulo: "Livro Teste", descricao: "Novo livro para teste", preco: 110.98})
    .expect(302, done);
  });


  });
