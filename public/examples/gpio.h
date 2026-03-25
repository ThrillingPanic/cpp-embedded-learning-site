#ifndef GPIO_H
#define GPIO_H

// Define GPIO pin modes
#define GPIO_INPUT 0
#define GPIO_OUTPUT 1

// Function prototypes
void gpio_init(int pin, int mode);
void gpio_write(int pin, int value);
int gpio_read(int pin);

#endif // GPIO_H