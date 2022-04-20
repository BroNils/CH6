// express.js register middleware

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');

/**
 *
 * @param {import('express').Express} app
 */
module.exports = function (app) {
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(process.env.ROOT_PATH, 'public')));
}
