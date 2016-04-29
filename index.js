#!/usr/bin/env node

var jafar = require('jafar');
var argv = require('minimist')(process.argv.slice(2));
var fs = require('fs');

var input = fs.readFileSync(argv._[0], {encoding: 'utf8'});

var jafarObject = new jafar({json: JSON.parse(input)});
jafarObject.listAllKeys().forEach(function (key) {
    jafarObject.replaceKey(key, key.split(':').join('_'), true, true);
});

console.log(JSON.stringify(jafarObject.json));