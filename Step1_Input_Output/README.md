# Installation
1.) Clone this project from github
2.) In your terminal, go to the S1_button_led directory
3.) Run `npm install`
4.) Run `bower install`


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


