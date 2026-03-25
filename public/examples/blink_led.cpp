#include <Arduino.h>

// Define the pin for the LED
const int ledPin = 13; // Change this to the appropriate pin for your board

void setup() {
    // Initialize the digital pin as an output
    pinMode(ledPin, OUTPUT);
}

void loop() {
    // Turn the LED on (HIGH is the voltage level)
    digitalWrite(ledPin, HIGH);
    // Wait for a second
    delay(1000);
    // Turn the LED off (LOW is the voltage level)
    digitalWrite(ledPin, LOW);
    // Wait for a second
    delay(1000);
}