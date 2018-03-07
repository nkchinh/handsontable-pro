'use strict';

var webpack = require('webpack');
var path = require('path');

var env = process.env.NODE_ENV || 'development';
var configFactory = require('./.config/' + env);

module.exports = function(envArgs) {
  return configFactory(envArgs);
};
