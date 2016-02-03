#Objectives
In this challenge, you start off with a button in an html page and when clicked, your LED should toggle on and off. 



![Image of button webpage](/Step1_Input_Output/S1_web_button_led/button_led_webpage.png)

* Challenge 1: Hook up your LED to the Arduino so that when you click the button inside the example, the LED will toggle on and off.
* Challenge 2: Add a second LED that also toggles when you press the button. Now have the LEDs alternate. When one is on, the other is off.
* Challenge 3: Play around with different lighting effects. Have your button toggle fading in, fading out, or twinkling!

#Setup

## Installation
1. Clone this project from github if you haven't already
2. In your terminal, go to the **S1_button_led** directory
3. Run `npm install`
4. Run `bower install`

## Hardware
1. Flash Standarda Firmata to the Arduino using the Arduino IDE (already done unless reflashed)
2. LED shortest leg to GND, long leg to pin 13

## Software
1. From the **S1_button_led** directory, run `node button_led.js`
2. Visit <a href="http://localhost:3000" target="_blank">localhost:3000</a> in the browser
3. Click the big button to start/stop your LED

## Design
1. If you want to remix and customize this webpage only go to this link: https://d157rqmxrxj6ey.cloudfront.net/st3f/30115/

# TROUBLESHOOTING

##Hardware
If the clicking the button doesn't light up the LED, make sure you declared the correct pin for your led

##Software
If the button doesn't start the LED, make sure your HTML page can load jQuery properly. 
Open the browser console and see if it prints "you clicked the button!" and it can access the board, 
you should see "XHR finished loading: GET"
