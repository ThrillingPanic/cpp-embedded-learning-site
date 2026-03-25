# Exercise 2: Embedded Systems

## Objective
In this exercise, you will implement a simple embedded system that reads data from a sensor and processes it. This will help you understand how to interface with hardware components and handle data in an embedded environment.

## Requirements
1. **Sensor Interface**: Use a temperature sensor (e.g., LM35) to read temperature data.
2. **Data Processing**: Convert the analog signal from the sensor to a digital value and display it on a serial monitor.
3. **Threshold Alert**: Implement a threshold value. If the temperature exceeds this value, trigger an alert (e.g., turn on an LED).

## Steps
1. **Setup the Hardware**:
   - Connect the temperature sensor to an analog input pin on your microcontroller.
   - Connect an LED to a digital output pin.

2. **Write the Code**:
   - Initialize the serial communication.
   - Read the analog value from the sensor.
   - Convert the analog value to temperature (in Celsius).
   - Check if the temperature exceeds the threshold and turn on the LED if it does.

3. **Test Your System**:
   - Upload the code to your microcontroller.
   - Monitor the temperature readings on the serial monitor.
   - Verify that the LED turns on when the temperature exceeds the threshold.

## Example Code
```cpp
#include <Arduino.h>

const int sensorPin = A0; // Pin connected to the temperature sensor
const int ledPin = 13;    // Pin connected to the LED
const float threshold = 30.0; // Temperature threshold in Celsius

void setup() {
    Serial.begin(9600);
    pinMode(ledPin, OUTPUT);
}

void loop() {
    int sensorValue = analogRead(sensorPin);
    float temperature = (sensorValue * 5.0 * 100.0) / 1024; // Convert to Celsius

    Serial.print("Temperature: ");
    Serial.println(temperature);

    if (temperature > threshold) {
        digitalWrite(ledPin, HIGH); // Turn on LED
    } else {
        digitalWrite(ledPin, LOW); // Turn off LED
    }

    delay(1000); // Wait for 1 second before the next reading
}
```

## Submission
- Submit your code and a brief report on your findings, including any challenges faced during the implementation and how you resolved them.