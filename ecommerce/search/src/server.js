const request = require('request');

const express = require('express');
const app = express();
app.use('/search/',express.static('./build'));

app.use('/search/autosuggest/:searchString', function (req, res) {
  console.log(`request received for auto suggestion in search`);
  getKeywords(req, res);
});

const getKeywords = function (req, res) {
  const searchString = req.params.searchString;
  const searchUrl = `http://completion.amazon.com/search/complete?search-alias=aps&client=amazon-search-ui&mkt=1&q=${searchString}`;
  request(searchUrl, function (error, response, body) {
    const keywords = extractKeywords(body);
    res.send(keywords);
    res.end();
  })
};

const extractKeywords = function (results) {
  const jsonResults = JSON.parse(results);
  return jsonResults[1];
};

app.listen('4001', function () {
  console.log(`search app is running. >> http://localhost:4001/search`);
});