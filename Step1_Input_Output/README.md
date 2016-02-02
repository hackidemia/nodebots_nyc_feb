#Setup

## Installation
1. Clone this project from github
2. In your terminal, go to the S1_button_led directory
3. Run `npm install`
4. Run `bower install`

## Hardware
1. Flash Standarda Firmata to the Arduino using the Arduino IDE (already done unless reflashed)
2. LED shortest leg to GND, long leg to pin 13

## Software
1. From the S1_button_led directory, run `node button_led.js`
2. Visit localhost:3000 in the browser
3. Click the big button to start/stop your LED

# TROUBLESHOOTING

##Hardware
If the clicking the button doesn't light up the LED, make sure you declared the correct pin for your led

##Software
If the button doesn't start the LED, make sure your HTML page can load jQuery properly. 
Open the browser console and see if it prints "you clicked the button!" and it can access the board, 
you should see "XHR finished loading: GET"
