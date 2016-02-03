var five = require("johnny-five");
five.Board().on("ready", function() {

  // Initialize the RGB LED
  //you can choose any PMW pins make sure they have ~ next to #
  var led = new five.Led.RGB({
    pins: {
      //test your rgb led with a coin battery to see which leg is conencted to each color
      red: #add your pin number,
      green: #add your pin number,
      blue: #add your pin number
    }
  });

  // this allows you to control board from terminal after
  this.repl.inject({
    led: led
  });

  // Turn it on and set the initial color
  led.on();
  led.color("#FF0000");
  //change the color to purple
  led.blink(500);

});
