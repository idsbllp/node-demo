
var url = require('url');
var getpic = require('../modle/getpic');
var showpic = require('../modle/showpic');

function router (app) {

    app.post('/index', function (req, res) {
        getpic(req, res);
    });

    app.get('/showpic', function (req, res) {
        showpic(req, res);
    });

    app.get('/showcourse', function (req, res) {
        showcourse(req, res);
    });
}

module.exports = router;
