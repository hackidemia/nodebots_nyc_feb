var express = require('express');
var app = express();
var five = require("johnny-five");
var board = new five.Board();
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

var state;  //We will send this state to the browser

//This code is used if you want to send information to the browser
app.get('/', function (req, res) {
  //This renders your index.html, and also sends data in the state
  res.render('index', state); 
});  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

board.on("ready", function() {

  //SAMPLE Temperature CODE - Add your own code below instead!

  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0" //This pin will change depending on how you set up your hardware
  });

  temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
    state = {temp: this.celsium + "°C"};
  });
});

