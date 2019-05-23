const request = require('request');

const express = require('express');
const app = express();
app.use('/recommendations/',express.static('./build'));

app.use('/recommendations/search/:searchString', function (req, res) {
  console.log(`request received for recommendations search`);
  searchEbay(req, res);
});

const searchEbay = function (req, res) {
  const searchString = req.params.searchString;
  const searchUrl = `http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=NOORULAM-SaveLah-PRD-7bffbb2e5-ce525737&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD=true&paginationInput.entriesPerPage=6&keywords=${searchString}&itemFilter.name=FreeShippingOnly&itemFilter.value=true`;
  request(searchUrl, function (error, response, body) {
    const ebayProducts = getEbayProducts(body);
    res.send(ebayProducts);
    res.end();
  })
};

const getEbayProducts = function (results) {
  const jsonResults = JSON.parse(results);
  const products = jsonResults.findItemsAdvancedResponse[0].searchResult[0].item;
  const productResults = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productResults.push({
        "name": product.title[0],
        "modelNumber": '',
        "price": product.sellingStatus[0].currentPrice[0].__value__,
        "currency": product.sellingStatus[0].currentPrice[0]['@currencyId'],
        "originalPrice": '',
        "image": product.galleryURL[0],
        "sourceLink": product.viewItemURL[0]
      }
    )
  }
  return productResults;
};

app.listen('4003', function () {
  console.log(`recommendations app is running. >> http://localhost:4003/recommendations`);
});