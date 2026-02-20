# calculatorApp
*** A modern, responsive calculator application built using Vanilla JavaScript, designed to demonstrate strong understanding of 
DOM manipulation, 
event delegation, 
state management, and 
UI engineering.


=> This project demonstrates:

✔ Strong understanding of JavaScript fundamentals
✔ Clean event-driven architecture
✔ Dynamic DOM manipulation (no hardcoded buttons)
✔ Logical thinking in managing application state
✔ UI engineering with modern CSS
✔ Error handling and edge-case consideration
✔ Performance-conscious event delegation

=> This is not just a calculator — it’s a foundational front-end engineering exercise.


🛠 Tech Stack

HTML5 – Semantic structure
CSS3 – Modern UI design
CSS Variables
Flexbox
CSS Grid
Glassmorphism
Animations & Transitions
Responsive Design
JavaScript (ES6+)
DOM Manipulation
Event Delegation
Dynamic Element Creation
Expression Evaluation using eval()
Keyboard Event Handling
Error Handling with try...catch


⚙️ Key Features
🧠 Core Functionality
Addition, Subtraction, Multiplication, Division, Modulus
Decimal support
Clear (AC) functionality
Delete last character (DEL)
Real-time input display
Error handling for invalid expressions


🎹 Keyboard Support
Numeric keys (0–9)
Operators (+, -, *, /, %)
Enter → Evaluate
Backspace → Delete
C → Clear


🎨 UI & UX Enhancements
Glassmorphism interface
Ripple click animation
Smooth transitions
Dark / Light theme toggle
Fully responsive layout



✔ Avoids repetitive markup
✔ Improves scalability
✔ Demonstrates DOM mastery

=> Event Delegation (Performance Optimization)
Instead of attaching individual listeners to every button, an event listener is attached to the parent element, so whenever a button is clicked, it gets the value from e.target 

It provides:

✔ Cleaner code
✔ Better performance
✔ Scalable architecture

=> Expression Evaluation
User input is evaluated using:
eval(currentInput)
Wrapped inside try...catch for error handling.

⚠ Note: eval() is used here for learning purposes. In production environments, a custom parser or safer evaluation logic is recommended.

=> State Management
The application maintains input state using:

let currentInput = "";

This mimics basic state-driven architecture used in modern frameworks like React.

📂 Project Structure
calculator-app/
│
├── index.html
├── style.css
├── script.js
└── README.md


