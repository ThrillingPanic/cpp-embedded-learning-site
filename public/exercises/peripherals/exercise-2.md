# Exercise 2: Controlling an Actuator

## Objective
Create a PWM (Pulse Width Modulation) controller to regulate power to an actuator (motor or LED).

## Background
Actuators are devices that perform actions in response to commands. PWM is a common technique to control the speed or brightness of devices by modulating the signal.

## Tasks

1. **Understand PWM Basics**
   - Study how PWM frequency and duty cycle work
   - Learn pulse width modulation applications

2. **Implement a PWM Controller**
   ```cpp
   class PWMController {
   private:
       int pin;
       int frequency;
       int dutyPercent;
   public:
       PWMController(int p, int freq) : pin(p), frequency(freq), dutyPercent(0) {}
       
       void setDutyCycle(int percent) {
           if (percent >= 0 && percent <= 100) {
               dutyPercent = percent;
           }
       }
       
       void start() {
           // Start PWM signal
       }
   };
   ```

3. **Create a Control Loop**
   - Gradually increase duty cycle from 0 to 100%
   - Reverse back down
   - Observe the behavior

## Deliverables
- Complete PWM controller class
- Test program demonstrating duty cycle variation
- Documentation on how PWM affects the actuator

## Hints
- PWM frequency is typically 1-100 kHz for most applications
- Duty cycle percentage directly affects power delivery
- Consider adding safety checks for pin validation
