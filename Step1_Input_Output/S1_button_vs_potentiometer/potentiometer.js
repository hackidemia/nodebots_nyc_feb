/*
 * In this step we will output the value of a potentiometer to the
 * console.
 */

var five = require("johnny-five");
var myBoard = new five.Board();

myBoard.on("ready", function() {

    var pmeter = new five.Sensor("#add the pin where you connect it like A0");

    pmeter.on("change", function() {
        console.log("The value of the potentiometer is:" +this.value );
    });
});

// Challenge: change the frequency at which we read the potentiometer value,
// What else can you change?
// Read more here: https://github.com/rwaldron/johnny-five/blob/master/docs/potentiometer.md
