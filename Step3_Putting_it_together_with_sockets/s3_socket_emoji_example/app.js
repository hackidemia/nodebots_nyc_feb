// Express Stuff
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
// Hardware Stuff
var five = require("johnny-five");
var board = new five.Board();
//var swtch;
var btn;
var led;

// Express Code
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});

 
board.on("ready", function() {
  // Sample Hardware Code - add your own below!
  // led = new five.Led(13);
  // btn1 = new five.Button({
  //   pin: 7, 
  //   isPullup: true,
  //   holdtime: 100
  // });

  // btn1.on("hold", function() {
  //   led.on();
  //   io.emit('heart-big');
  // });

  // btn1.on("release", function() {
  //   led.off();
  //   io.emit('heart-small');
  // });


});

