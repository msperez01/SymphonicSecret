(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

//var $ = require('jquery');



//alert('fuck');

var http = require('http');
var fs = require('fs');

var server = http.createServer();

/*//this is asynchronous meaning the file is doing it's own stuff while everything else is running
fs.readFile('save.txt', 'utf8', function(err, data){ 

    fs.writeFileSync('previousSave.txt', data);
    console.log(data); //data is being read.

});*/

},{}]},{},[1]);
