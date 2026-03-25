# C++ Embedded Learning Site

Welcome to the C++ Embedded Learning Site! This project is designed to help learners understand the fundamentals of C++ programming and its applications in embedded systems. The site is structured into multiple sections, each focusing on different aspects of C++ and embedded systems, complete with exercises to reinforce learning.

## Project Structure

The project is organized as follows:

- **public/**: Contains all the HTML files, exercises, and examples.
  - **index.html**: The main entry point of the website with navigation links.
  - **sections/**: Contains individual HTML files for each learning section.
    - **intro.html**: Introduction to C++ and embedded systems.
    - **cpp-basics.html**: Fundamental concepts of C++.
    - **embedded-systems.html**: Principles of embedded systems.
    - **peripherals.html**: Interfacing with various peripherals.
    - **rtos.html**: Introduction to real-time operating systems (RTOS).
  - **exercises/**: Contains markdown files for exercises related to each section.
    - **intro/**: Exercises for the introduction section.
    - **cpp-basics/**: Exercises for the C++ basics section.
    - **embedded-systems/**: Exercises for the embedded systems section.
  - **examples/**: Example C++ code demonstrating various concepts.
    - **blink_led.cpp**: Example for blinking an LED.
    - **uart_example.cpp**: Example for UART communication.
    - **gpio.h**: Header file for GPIO operations.
  
- **assets/**: Contains CSS and JavaScript files for styling and interactivity.
  - **css/**: Styles for the website.
    - **styles.css**: Main stylesheet.
  - **js/**: JavaScript files for interactive elements.
    - **script.js**: Main script file.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository to your local machine.**
2. **Navigate to the project directory.**
3. **Install dependencies** (if using npm scripts):
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm start
   ```
   This will launch `live-server` and open the site at `http://localhost:8080`

   *Alternatively, you can serve it manually*:
   ```bash
   # Using Python 3
   python3 -m http.server --directory public 8000
   # Then visit http://localhost:8000
   ```

5. **Explore the different sections and complete the exercises** to enhance your understanding of C++ and embedded systems.

## Site Structure

- **Home** (`index.html`): Navigation to all sections
- **Sections**: Each section contains learning material and links to exercises
  - Introduction: Fundamentals of C++ and embedded systems
  - C++ Basics: Data types, control flow, functions
  - Embedded Systems: Architecture, memory, interrupts
  - Peripherals: GPIO, UART, I2C, SPI interfaces
  - RTOS: Task scheduling, concurrency, real-time systems
- **Exercises**: Each section has 2+ exercises with detailed instructions
- **Examples**: Reference C++ code for embedded systems concepts

## Contributing

Contributions are welcome! If you have suggestions for improvements or additional exercises, feel free to submit a pull request.

## License

This project is open-source and available under the MIT License.