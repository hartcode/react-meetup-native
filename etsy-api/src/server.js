
var express = require('express');
//var https = require('https');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var apiApp = express();
var router = express.Router();
var cors = require('cors')
apiApp.use(cors());

var ETSY_URL = 'openapi.etsy.com';
var ETSY_PATH = '/v2/shops/12125241/listings/active?api_key=1tjzrujzwl7irsede06obkly';
var ETSY_SHOP_ID = '12125241';
var ETSY_API_KEY = '1tjzrujzwl7irsede06obkly';

var mock = require('../mockApi');

var options = {
  hostname: ETSY_URL,
  path: ETSY_PATH
};

router.get('/listings', function(req, res) {
	res.status(200);
    res.send(mock.listing);
});
/* unable to find local cert... set cacert path?
router.get('/listings', function(req, res) {
	https.get(options, function(http_res) {
	    http_res.on('data', function (chunk) {
	        res.send('BODY: ' + chunk);
	    });
    	 http_res.on("end", function () {
	        console.log(data);
	    });
	});
});
*/

router.get('/images', function(req, res) {
	res.status(200);
	var id = req.query.id;
	res.send(mock.images);
});

apiApp.use('/api/', router);



apiApp.listen(4090);

console.log('API Running at: http://localhost:4090');
