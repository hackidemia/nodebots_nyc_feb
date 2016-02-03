In this challenge, you will use a sensor of your choice to gather some data. In the example, we use a simple sensor or 'switch' but you can use anything! Some examples are force, voltage, touch, humidity, temperature, or sound.

Challenge 1: Have your script log your data every half second to the console. For a hint, see slide number X.
Challenge 2: Send the data to your front end and have it log to the screen! You will have to refresh to see the new data.
Challenge 3: Try collecting data from 2 sensors at once, and doing a calculation. For example, maybe you could find the average of the data over a period of time.


# Sample Board Setup

1.) Flash Standard Firmata to the Arduino using the Arduino IDE (already done unless reflashed)
2.) LED longest pin to GND, any of the other 3 pins to pin 13
3.) Button/sensor one terminal to GND, the other terminal to pin 7

# Software Setup

1.) Run command: node button_led.js
2.) Visit localhost:3000 in the browser
3.) Click the big button to start/stop your LED

TROUBLESHOOTING
================
#Hardware
If the Button doesn't start the button make sure that you declared the correct pin for your led

#Software
If the Button doesn't start the button make sure that your html page can load jQuery properly. 

I used bower for making sure I am using the right version of Jquery
Commands: 
$ bower init
$ bower install jquery --save

To use jquery include this script in your index.html page: 
<script src="bower_components/jquery/dist/jquery.min.js"></script>



