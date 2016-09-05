
// var request = require('request');
var url = require('url');
var http = require('http');

function showpic(req, ress) {
    var xh = url.parse(req.url).query;
    console.log(xh);

    var picurl = 'http://jwzx.cqupt.edu.cn/showstupic.php?' + xh;
    // var picurl = 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=4128521442,3757300347&fm=85&s=9C306FDB0E620496510061280300F052'
    // var picurl = 'https://github.com/request/request';
    //  var picurl = https://jwzx.cqupt.congm.in/showstupic.php?xh=2015211878

    // request.get({
    //             uri: picurl+'2015211878',
    //             encoding: 'binary'
    //         }, function (requestErr, requestResponse, requestBody) {

    //     // requestResponse.setEncoding("binary");
    //     // var base = new Buffer(requestBody, 'binary').toString('base64');
    //     // res.write(base);
    //     // console.log(requestBody);
    //     // var img = requestBody;
    //     ress.writeHead('200', {'Content-Type': 'image/jpeg'});    //写http头部信息
    //     ress.write(requestBody, 'binary');
    //     console.log(requestBody);
    //     ress.end();
    // });

    http.get(picurl, function (res) {
        var imgData = "";

        res.setEncoding("binary");

        res.on("data", function(chunk){
            imgData += chunk;
        });

        res.on('end', function () {
            ress.writeHead('200', {'Content-Type': 'image/jpeg'});
            ress.write(imgData, 'binary');
            ress.end();
        });
    });

}

module.exports = showpic;





