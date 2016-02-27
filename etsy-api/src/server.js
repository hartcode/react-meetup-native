
var express = require('express');
var https = require('https');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var request = require("request");

var apiApp = express();
var router = express.Router();
var cors = require('cors')
apiApp.use(cors());

var ETSY_URL = 'openapi.etsy.com';
var ETSY_SHOP_ID = '12125241';
var ETSY_API_KEY = process.env.ETSY_API_KEY;
var ETSY_LISTINGS_PATH = '/v2/shops/' + ETSY_SHOP_ID + '/listings/active?api_key=' + ETSY_API_KEY;
var ETSY_IMAGES_PATH = '/v2/listings/';


var mock = require('../mockApi');

var options = {
  hostname: ETSY_URL,
  path: ETSY_IMAGES_PATH
};

router.get('/listings', function(req, res) {
	options.path = ETSY_LISTINGS_PATH;
	https.get(options, function(http_res) {
		var data = "";
		res.status(http_res.statusCode);
		res.setHeader('content-type', http_res.headers['content-type']);
	    http_res.on('data', function (chunk) {
	        data += chunk;
	    });
		http_res.on('end', function () {
			res.setHeader('content-length', data.length);
	        res.send(data);
			
	    });
	});
});
router.get('/images', function(req, res) {
	var id = req.query.id;
	var url = ETSY_IMAGES_PATH + id + '/images?api_key=' + ETSY_API_KEY;
	options.path = url;
	https.get(options, function(http_res) {
		var data = "";
		res.status(http_res.statusCode);
		res.setHeader('content-type', http_res.headers['content-type']);
		 http_res.on('data', function (chunk) {
	        data += chunk;
	    });
		http_res.on('end', function () {
			res.setHeader('content-length', data.length);
	        res.send(data);
			
	    });
	});
});

apiApp.use('/api/', router);



apiApp.listen(4090);

console.log('API Running at: http://localhost:4090');
