var five = require("johnny-five");
var myBoard = new five.Board();


myBoard.on("ready", function() {

    var rgb = new five.Led.RGB({
        pins: {
            red: 6,
            green: 5,
            blue: 3
        }
    });

    var pmeter = new five.Sensor("A0");

    //add code to change the color of the led based on the pmeter value or
    //based on the button state, what is the difference between the two?
    //Use APIS--> http://johnny-five.io/api/led.rgb/ and http://johnny-five.io/api/sensor/

    });
});
