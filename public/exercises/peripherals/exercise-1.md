# Exercise 1: Interfacing a Sensor

## Objective
Learn how to interface a temperature sensor with a microcontroller using I2C communication protocol.

## Background
Temperature sensors are commonly used in embedded systems to monitor environment conditions. In this exercise, you will work with an I2C-based temperature sensor.

## Tasks

1. **Study I2C Protocol**
   - Review the I2C communication protocol
   - Understand the data transmission format

2. **Write the Sensor Interface Code**
   ```cpp
   #include <iostream>
   using namespace std;

   class TemperatureSensor {
   private:
       int address;
   public:
       TemperatureSensor(int addr) : address(addr) {}
       float readTemperature() {
           // Read from I2C device at address
           return 25.5; // Placeholder
       }
   };
   ```

3. **Test Your Implementation**
   - Create a simple loop that reads temperature every second
   - Print the values to the console

## Deliverables
- Complete C++ class for sensor communication
- Example code demonstrating sensor usage
- Comments explaining each section

## Hints
- Use bitwise operations for bit manipulation
- Remember to handle I2C communication carefully
- Consider error handling for failed reads
