Combine stage one and stage two to create an alert system that changes the LED color when a critical data metric has occurred. After that, you can have something cool happen in the browser. If you're really wanting to do something cool, you can implement sockets to have your application update live on multiple machines without having to refresh! 

Challenge 1: Turn on or change the color of an LED when a critical data metric occurs.
Challenge 2: Make a webapp (like in part 2) and when you hit your critical metric point, output something onto your screen. Implement this app using sockets, so that it can update live.
Challenge 3: Make something fun and cool! 

For help and inspiration, refer to the presentation slides, the piano demo, and the socket emoji example inside this repository.


# Sample Board Setup

1.) Flash Standard Firmata to the Arduino using the Arduino IDE (already done unless reflashed)
2.) LED longest pin to GND, any of the other 3 pins to pin 13

# Software Setup

1.) Run command: node your_project.js
2.) Visit localhost:3000 in the browser

TROUBLESHOOTING
================
#Hardware
If the Button doesn't start the button make sure that you declared the correct pin for your led

#Software
If the Button doesn't start the button make sure that your html page can load jQuery properly. 




