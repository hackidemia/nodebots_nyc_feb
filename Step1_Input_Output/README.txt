In this first challenge, you start off with a button in an html page and when clicked, your LED should toggle on and off. You'll learn the basic setup of the Arduino and how to create your first circuit. Lighting up and LED is considered the 'Hello World' program of the hardware world.

Challenge 1: Hook up your LED to the Arduino so that when you click the button inside the example, the LED will toggle on and off.
Challenge 2: Add a second LED that also toggles when you press the button. Now have the LEDs alternate. When one is on, the other is off.
Challenge 3: Play around with different lighting effects. Have your button toggle fading in, fading out, or twinkling!


# Board Setup

1.) Flash Standarda Firmata to the Arduino using the Arduino IDE (already done unless reflashed)
2.) LED shortest leg to GND,long leg to pin 13

# Software Setup

1.) Run command: node button_led.js
2.) Visit localhost:3000 in the browser
3.) Click the big button to start/stop your LED

TROUBLESHOOTING
================
#Hardware
If the Button doesn't start the button make sure that you declared the correct pin for your led

#Software
If the Button doesn't start the button make sure that your html page can load jquerry properly. 
Open the browser console and see if it prints "you cliked the button" and it can access the board, 
you should see " XHR finished loading: GET"

I used bower for making sure I am using the right version of Jquery
Commands: 
$ bower init
$ bower install jquery --save

To use jquery include this script in your index.html page: 
<script src="bower_components/jquery/dist/jquery.min.js"></script>


