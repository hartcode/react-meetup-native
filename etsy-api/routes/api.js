var express = require('express');
var router = express.Router();
var ETSY_API_KEY = process.env.ETSY_API_KEY;
var ETSY_SHOP_ID = '12125241';
var ETSY_URL = 'https://openapi.etsy.com/v2/shops/' + ETSY_SHOP_ID +'/listings/active?api_key=' + ETSY_API_KEY;





router.get('/listings', function(req, res) {
	req(url, function(){
		if(error){
			res.send(500, 'problem!');
		}

		res.send(200, body);
	});
});
