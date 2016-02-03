#First example: blink
You'll learn the basic setup of the Arduino and how to create your first circuit. Lighting up and LED is considered the 'Hello World' program of the hardware world.
## Challenge
* learn how to connect and make an LED blink from your terminal
* play with the code and discover how you can change the blinking speed

## Hardware
![Image of blink hardware setup](http://johnny-five.io/img/led-scene-0.gif)

##Software
* Clone this repo if you haven't already
* cd S1_blink_led
* open and modify the file "blink.js"
* run "node blink.js" to check if it works

#Second example: a more funky LED - RGB
You will learn how to connect and change the color of an RGB led and think about
how this can be a more useful output than a simple LED

## Challenge
* learn how to connect and make an RGB change it's color from your terminal
* play with the code and discover how to make the color be purple

## Hardware
![Image of blink hardware setup](http://4.bp.blogspot.com/-FeGrs8aZVg0/VLE93ytSlwI/AAAAAAAAM4U/i5gvNlGHI5E/s1600/RgbLedFadingColors_bb.png)
##Software
* Clone this repo if you haven't already
* cd S1_rgb_led
* open and modify the file "rgb_led.js"
* run "node blink.js" to check if it works

#Third example: button vs potentiometer
You will learn the difference between analog and digital input and play with 2
different types of inputs like a button and a potentiometer

## Challenge
* learn how to connect and read the data from a button
* learn how to connect and read the data from a potentiometer
* play with the code and discover how to make an RGB LED change color based
on the button and the potentiometer data.
* what are the tradeoffs between using one or the other?

## Hardware
![Image of button hardware setup](https://raw.githubusercontent.com/rwaldron/johnny-five/master/docs/breadboard/button.png)
![Image of potentiometer hardware setup](https://raw.githubusercontent.com/rwaldron/johnny-five/master/docs/breadboard/potentiometer.png)


##Software
* Clone this repo if you haven't already
* cd S1_button_vs_potentiometer
* open and modify the file "simple_button.js"
* run "node simple_button.js" to check if it works
* open and modify the file "potentiometer.js"
* run "node potentiometer.js" to check if it works
* open and modify the file "challenge_led.js" (try not to use the solution unless y're really stuck)
* run "challenge_led.js" to check if it works


#Last example: Web button

#Objectives
In this challenge, you start off with a button in an html page and when clicked, your LED should toggle on and off.

![Image of button webpage](/S1_web_button_led/button_led_webpage.png)

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
