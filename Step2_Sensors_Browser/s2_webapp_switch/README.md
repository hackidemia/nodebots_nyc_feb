# Sample Board Setup

1. Clone this project from github if you haven't already
2. In your terminal, go to the **s2_webapp_switch** directory
3. Run `npm install`
4. Run `bower install`
5. Flash Standard Firmata to the Arduino using the Arduino IDE (already done unless reflashed)
6. LED longest pin to GND, any of the other 3 pins to pin 13
7. Button one terminal to GND, the other terminal to pin 7
8. From the **s2_webapp_switch** directory, run `node app.js`
9. Visit <a href="http://localhost:3000" target="_blank">localhost:3000</a> in the browser
10. Use something metal to press each "button" (e.g. a quarter, ring, etc.)
