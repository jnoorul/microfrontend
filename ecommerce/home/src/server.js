var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:4001',
  ServerTwo = 'http://localhost:4002',
  ServerThree = 'http://localhost:4003';

app.use('/',express.static('./build'));

app.all("/search/*", function(req, res) {
  console.log('redirecting to Server1');
  apiProxy.web(req, res, {target: serverOne});
});

app.all("/products/*", function(req, res) {
  console.log('redirecting to Server2');
  apiProxy.web(req, res, {target: ServerTwo});
});

app.all("/recommendations/*", function(req, res) {
  console.log('redirecting to Server3');
  apiProxy.web(req, res, {target: ServerThree});
});

app.listen(4000);

console.log("server successfully started at port 4000");