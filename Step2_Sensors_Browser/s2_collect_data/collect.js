var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  //SAMPLE Temperature CODE - Add your own code below instead!

  var temperature = new five.Thermometer({
    controller: "TMP36",
    pin: "A0" //This pin will change depending on how you set up your hardware
  });

  temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});

