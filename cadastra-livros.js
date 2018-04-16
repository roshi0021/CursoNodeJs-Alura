var http = require('http');

var configuracoes = {
  hostname: 'localhost',
  port: 3000,
  path: '/produtos',
  method: 'post',
  headers: {
    'Accept': 'application/json',
    'Content-type': 'application/json'
  }
};

var client = http.request(configuracoes, function(res){
  console.log(res.statusCode);
  res.on('data', function(body){
    console.log('Corpo:'+body);
  });
});

var produto = {
  'titulo': 'mais sobre o node',
  'descricao': 'livro whatever sobre node',
  'preco': 100.0
}

client.end(JSON.stringify(produto));