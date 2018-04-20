var express = require('../config/express')();
var request = require('supertest')(express);

describe("#ProdutosController", function(){
  it('#lista de produtos json', function(done){
    request.get("/produtos")
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(200, done);
    });
  });
