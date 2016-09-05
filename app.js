
var http = require('http');
var express = require('express');
var request = require('request');
var router = require('./controller/router');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('view'));
app.use(express.static('www'));

router(app);

app.listen(1111, function () {
    console.log('127.0.0.1:1111/index');
});
