var five = require("johnny-five");
var myBoard = new five.Board();


myBoard.on("ready", function() {
  var led = new five.Led(#your led pin number here);
  //add the command to make the led blink here
});
