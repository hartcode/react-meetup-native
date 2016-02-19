var express = require('express');
var router = express.Router();
var ETSY_URL = 'https://openapi.etsy.com/v2/shops/12125241/listings/active?api_key=1tjzrujzwl7irsede06obkly';
var ETSY_SHOP_ID = '12125241';
var ETSY_API_KEY = '1tjzrujzwl7irsede06obkly';



router.get('/listings', function(req, res) {
	req(url, function(){
		if(error){
			res.send(500, 'problem!');
		}

		res.send(200, body);
	});
});
