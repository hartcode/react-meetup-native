var express = require('express');
var es = require('es6-promise').polyfill();
var fetch = require('isomorphic-fetch');
var router = express.Router();
var ETSY_URL = 'https://openapi.etsy.com/v2/shops/12125241/listings/active?api_key=1tjzrujzwl7irsede06obkly';
var ETSY_SHOP_ID = '12125241';
var ETSY_API_KEY = '1tjzrujzwl7irsede06obkly';



router.get('/listings', function(req, res) {
	console.log('router!');
	fetch(ETSY_URL)
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(body) {
        console.log('send body')
		res.send(200, body);
    });

});

module.exports = router;
