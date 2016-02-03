# Sample Board Setup

#First example: collecting data
In this stage, you'll start collecting data using sensors connected to your Arduino! Some examples of data you can measure are temperature, light, sound, humidity, force, and torque. We will collect data and then as a challenge, we will send our data to a web app and display it in our browser.

## Challenge
* learn how to connect and collect data from a sensor of your choice. Log this data to your console.
* Save the data in an array and then after a period of time, log out the accumulated data.
* Do a calculation with your data! This could be the average over a set time period, or the range of the data.

## Hardware
For example setups, check out this page (http://johnny-five.io/examples/) of examples of how to hook up various sensors. Each sensor also has an example code snippet that shows you how to use Johnny-five to collect your data.

##Software
* Clone this repo if you haven't already
* cd S2_collect_data
* run "npm install"
* open and modify the file "collect.js"
* run "node collect.js" to check if it works

#Second example: sending our data to the browser and outputting it to the screen
We've set up a very simple server for you. Then you'll learn how to save your data to an object, and send it to the browser screen when a user goes to your page.

## Challenge
* Make sure that your app is working and that you can see your html page
* Modify the code so that you can send your calculation and/or data to the page as an object. Now it should show up on the page. However, you have to refresh to get new data.

## Hardware
Hardware setup is the same as for step 1.
##Software
* cd S1_rgb_led
* run "npm install"
* open and modify the files "app.js" and "index.html"
* run "node app.js"
* In your browser, visit 'localhost:3000' and press enter to visit your page and see your data

