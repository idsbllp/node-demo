
var url = require('url');
var http = require('http');

function showpic(req, ress) {
    var xh = url.parse(req.url).query;
    console.log(xh);

    var picurl = 'http://jwzx.cqupt.edu.cn/showstupic.php/showstupic.php?' + xh;

    http.get(picurl, function (res) {
        var imgData = '';

        res.setEncoding('binary');

        res.on('data', function(chunk){
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





