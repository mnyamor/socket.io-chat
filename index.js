/**
 * Created by maria on 3/30/16.
 */

var app = require('express')();
var http = require('http').Server(app);

// define a route handler / that gets called when we hit our website home.
app.get('/', function (req, res) {
    res.send('<h1>Hello World</h1>');
});

http.listen(3000, function () {
    console.log('listening on port 3000');
});


