var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var fallback = require('connect-history-api-fallback');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var opener = require('opener');

var app = express();
var compiler = webpack(config);


app.use(fallback());

app.use(webpackDevMiddleware(compiler, {
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
}));

app.use(webpackHotMiddleware(compiler));


app.listen(4080, 'localhost', function(error) {

  if (error) {
    console.error(error);
  } else {
    var url = 'http://localhost:4080';
    console.info('Listening on ' + url); //record companies are shady
    opener(url);
  }

});

