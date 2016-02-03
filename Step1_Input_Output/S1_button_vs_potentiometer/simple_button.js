var five = require("johnny-five"),
  board, button;

board = new five.Board();

board.on("ready", function() {

  // Create a new `button` hardware instance.
  // This example allows the button module to
  // create a completely default instance
  button = new five.Button(#add pin where you connect the button like "2");

  // Inject the `button` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    button: button
  });

  // Button Event API

  // "down" the button is pressed
  button.on("down", function() {
    console.log("down");
  });

  //Challenge Write the function for button "up" and "hold"
  //Can you tell the difference between "down" and "hold"
});

//Source code example: https://github.com/rwaldron/johnny-five/blob/master/docs/button.md
