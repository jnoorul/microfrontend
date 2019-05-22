var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();

var searchApp = 'http://localhost:4001',
  productsApp = 'http://localhost:4002',
  recommendationsApp = 'http://localhost:4003';

app.use('/',express.static('./build'));

app.all("/search/*", function(req, res) {
  console.log('redirecting to search app Server');
  apiProxy.web(req, res, {target: searchApp});
});

app.all("/products/*", function(req, res) {
  console.log('redirecting to products app server');
  apiProxy.web(req, res, {target: productsApp});
});

app.all("/recommendations/*", function(req, res) {
  console.log('redirecting to recommendations app server');
  apiProxy.web(req, res, {target: recommendationsApp});
});

app.listen(4000);

console.log("server successfully started at port 4000");