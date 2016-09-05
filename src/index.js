
var http = require('http');
var request = require('request');
var express = require('express');
var router = require('../controller/router');
var app = express();


var url = 'http://jwzx.cqupt.edu.cn/jwzxtmp/data/json_studentList.php?dirId=&searchKey=%E6%9D%8E%E7%AB%8B%E5%B9%B3&page=1&rows=20';

app.use(express.static('view'));

// router(app);

// app.get('/index', )

app.get('/index', function (req, res) {
    res.write('aha');
    res.end();
});

// http.createServer(function (requ, resp) {
//     request(url, function(error, response, body) {
//         resp.write(body);
//         resp.end();
//     });

// }).listen(1211);

app.listen(1111, function () {
    console.log('127.0.0.1:1111/index');
})
