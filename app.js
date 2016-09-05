
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
// var name = encodeURIComponent('李立平');
    // var url = `http://jwzx.cqupt.edu.cn/jwzxtmp/data/json_studentList.php?dirId=&searchKey=${name}&page=1&rows=20`;
// var url = 'http://jwzx.cqupt.edu.cn/jwzxtmp/data/json_studentList.php?dirId=&searchKey=%E6%9D%8E%E7%AB%8B%E5%B9%B3&page=1&rows=20'
// var a = encodeURIComponent(url);


// http.createServer(function (requ, resp) {
//     request(url, function(error, response, body) {
//         resp.write(body);
//         resp.end();
//     });

// }).listen(1211);

app.listen(1111, function () {
    console.log('127.0.0.1:1111/index');
});
