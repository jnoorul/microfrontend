/* eslint-disable no-console */
import express from 'express';
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var teamBlue = 'http://localhost:3001';
var teamGreen = 'http://localhost:3002';
import morgan from 'morgan';
import path from 'path';
import renderPage from './page/render';

const app = express();
app.use(morgan('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/red/images', express.static('./images'));
app.use('/common', express.static('./common'));
app.use('/red', express.static('./build'));

app.all('/blue/*', (req, res) => {
  console.log('proxy redirection for team blue');
  apiProxy.web(req, res, {target: teamBlue});
});

app.all('/green/*', (req, res) => {
  console.log('proxy redirection for team green');
  apiProxy.web(req, res, {target: teamGreen});
});

app.get('/:sku?', (req, res) => {
  const sku = req.params.sku;
  const html = renderPage(sku);
  res.render('layout', { html });
});

app.listen(3003);
console.log(`🔴  team red running. product page is available here:
>> http://127.0.0.1:3003/`);
