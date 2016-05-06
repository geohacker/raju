#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');
var raju = require('./');

var input = fs.readFileSync(argv._[0], {encoding: 'utf8'});
console.log(JSON.stringify(raju(JSON.parse(input))));