/**
 * Created by maria on 3/30/16.
 */

var app = require('express')();
var http = require('http').Server(app);

//initialize a new instance of socket.io
var io = require('socket.io')(http);

// define a route handler / that gets called when we hit our website home.
app.get('/', function (req, res) {
    //res.sendFile(__dirname + '/index.html');
    res.sendfile('index.html');

});

//listen on the connection event for incoming sockets, and log it to the console
io.on('connection', function(socket){
    //console.log('a user connected');

    //socket.emit('date', {'date': new Date()});

    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        // console.log('message: ' + msg);
    });

    socket.on('disconnect', function(){
       // console.log('user disconnected');

    });
    socket.on('date', function(data){
        $('#date').text(data.date);
    });
});

http.listen(3000, function () {
    console.log('listening on port 3000');
});


