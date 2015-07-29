'use strict';

var _ = require('lodash');

// ESLint Core
var bestPractices = require('./rules/best-practices');
var errors = require('./rules/errors');
var legacy = require('./rules/legacy');
var node = require('./rules/node');
var strict = require('./rules/strict');
var style = require('./rules/style');
var variables = require('./rules/variables');

var defaults = {
  'env': {
    'browser': true,
    'node': true,
    'amd': false,
    'mocha': false,
    'jasmine': false
  },
  'globals': {},
  'rules': {}
};

module.exports = _.merge(
  defaults,
  bestPractices,
  errors,
  legacy,
  node,
  strict,
  style,
  variables
);
