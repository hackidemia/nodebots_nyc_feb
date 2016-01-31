var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var five = require("johnny-five");
var board = new five.Board();


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});

board.on("ready", function() {
  //YOUR CODE HERE
});

