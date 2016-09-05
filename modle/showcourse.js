
var request = require('request');

function showcourse (req, res) {
    var value = req.body.value;
    
    value = encodeURIComponent(value);

    var url = 'http://jwzx.cqupt.edu.cn/jwzxtmp/data/json_studentList.php?dirId=&searchKey='+value+'&page=1&rows=20';

    request(url, function (requireErr, requestResponse, requestBody) {
        res.write(requestBody);
        res.end();
    });
    
}

module.exports = showcourse;
