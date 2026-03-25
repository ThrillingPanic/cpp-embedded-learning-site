# C++ Embedded Learning Site

Welcome to the C++ Embedded Learning Site! This project is designed to help learners understand the fundamentals of C++ programming and its applications in embedded systems. The site is structured into multiple sections, each focusing on different aspects of C++ and embedded systems, complete with exercises to reinforce learning.

## Project Structure

The project is organized as follows:

- **public/**: Contains all the HTML files, exercises, and examples.
  - **index.html**: The main entry point of the website with navigation links.
  - **sections/**: Contains individual HTML files for each learning section.
    - **intro.html**: Introduction to C++ and embedded systems.
    - **cpp-basics.html**: Hub for C++ Basics curriculum.
    - **fundamentals/**: C++ Basics lessons (Variables, Operators, Loops, Arrays, Functions, Classes, etc.)
      - **cpp-basics-variables.html**: Variables, data types, input/output, scope, and memory efficiency.
      - **cpp-basics-operators.html**: Operators, conditional statements (if/else/else if), and decision-making.
      - **cpp-basics-control-flow.html**: Control structures and program flow.
      - **cpp-basics-loops.html**: Iteration patterns and loop constructs.
      - **cpp-basics-arrays.html**: Arrays, indexing, and sequential data storage.
      - **cpp-basics-functions.html**: Function design, parameters, and return values.
      - **cpp-basics-classes.html**: Object-oriented programming fundamentals.
    - **memory/**: Memory management and architecture lessons.
      - **cpp-basics-memory.html**: Stack, heap, allocation strategies, and best practices.
      - **cpp-basics-stack-vs-heap.html**: Deep dive into stack vs heap with real embedded examples.
    - **embedded-systems.html**: Principles of embedded systems.
    - **embedded-systems/**: Specific embedded topics (bit manipulation, pointers, type casting).
    - **peripherals.html**: Interfacing with various peripherals.
    - **rtos.html**: Introduction to real-time operating systems (RTOS).
  - **exercises/**: Contains markdown files for exercises related to each section.
    - **intro/**: Exercises for the introduction section.
    - **cpp-basics/**: Exercises for the C++ basics section.
    - **embedded-systems/**: Exercises for the embedded systems section.
    - **peripherals/**: Exercises for the peripherals section.
    - **rtos/**: Exercises for the RTOS section.
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

## Learning Approach & Features

Each lesson in this curriculum is designed for the best learning experience:

- **Learning Objectives**: Clear goals for what you'll understand by the end of each lesson
- **Explanation-First Content**: Concepts explained in detail before code examples (minimal inline code)
- **Real-World Examples**: Embedded systems patterns and practical applications throughout
- **Mini-Projects**: 3 hands-on projects per lesson with collapsible solutions for practice
- **Interactive Quizzes**: 10-question quizzes at the end of each lesson to assess understanding
  - Completion tracking: Lessons marked complete when quiz score ≥ 80%
  - localStorage-based progress tracking (persists across browser sessions)
- **Video Resources**: Curated YouTube links for supporting material and alternative explanations
- **Memory-Efficient Design**: Special emphasis on why every decision matters in embedded systems

### Design Philosophy

- **For Embedded Systems**: Every lesson emphasizes memory constraints, efficiency, and real hardware considerations
- **Explanation Over Code**: Concepts explained thoroughly; learners understand *why* before copying code
- **Interactive Progress**: Visual feedback on completion; learners know what they've mastered
- **Real Patterns**: Code examples use actual embedded systems patterns (GPIO, UART, sensors, interrupts)
- **Scope and Scaffolding**: Progressive complexity; fundamentals before advanced topics

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
  - **Introduction**: Fundamentals of C++ and embedded systems
  - **C++ Basics Hub** (`cpp-basics.html`): Overview of all C++ fundamentals lessons
    - **Fundamentals** (comprehensive coursework):
      - Variables, Input & Output: Data types, memory efficiency, scope, primitive types, input/output
      - Operators & Conditional Statements: Arithmetic, comparison, logical, bitwise operators + if/else/else if decisions
      - Control Flow: Program flow and branching (complements Operators)
      - Loops: for, while, do-while, iteration patterns
      - Arrays: Sequential data storage, indexing, multi-dimensional arrays
      - Functions: Design, parameters, return values, scope
      - Classes: Object-oriented programming fundamentals
    - **Memory Management** (specialized topics):
      - Memory Management: Stack, heap, allocation strategies, best practices
      - Stack vs Heap: Deep dive comparison with embedded real-world examples
  - **Embedded Systems**: Architecture, memory, interrupts, real-world applications
  - **Peripherals**: GPIO, UART, I2C, SPI interfaces
  - **RTOS**: Task scheduling, concurrency, real-time systems
- **Exercises**: Each section has 2+ exercises with detailed instructions
- **Examples**: Reference C++ code for embedded systems concepts

## Contributing

Contributions are welcome! If you have suggestions for improvements, additional exercises, or new lessons, feel free to submit a pull request.

Areas where contributions are especially valuable:
- Additional mini-projects or exercises
- Video resource suggestions
- Real-world embedded systems examples
- Corrections or clarifications to existing lessons
- New lessons or advanced topics

## Feedback

Have questions or suggestions? Open an issue on the repository to:
- Report bugs or unclear explanations
- Suggest additional topics or lessons
- Share your learning experience
- Propose improvements to exercises or quizzes

## License

This project is open-source and available under the MIT License.