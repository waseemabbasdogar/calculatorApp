// Selecting DOM
const toggle = document.querySelector(".toggle")
const display = document.getElementById("display")
const buttonContainer = document.getElementById("button")

const buttonValues = [
  "C", "DEL", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "0", ".", "="
];


// Create buttons dynamically
buttonValues.forEach((value) => {
  const btn = document.createElement("button")
  btn.textContent = value

  if(["C", "DEL", "%", "/", "*", "+", "-"].includes(value)){
    btn.classList.add("operator")
  }

  if(value === "="){
    btn.classList.add("equal")
  }

  buttonContainer.appendChild(btn)
})


// Logic to calculate
let currentInput = ""

function inputDisplay(value) {
  display.textContent = value || "0"
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString()
  } catch {
    display.textContent = "Error"
  }

  inputDisplay(currentInput)
}

// Event Delegation
buttonContainer.addEventListener("click", (e) => {
  if(e.target.tagName !== "BUTTON") return;

  const value = e.target.textContent

  if(value === "C"){
    currentInput = ""
  } 
  else if(value === "DEL"){
    currentInput = currentInput.slice(0, -1)
  } 
  else if(value === "="){
    calculate()
    return
  } 
  else {
    currentInput += value
  }

  inputDisplay(currentInput)
})


// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key

  if(!isNaN(key) || ["%", "/", "*", "+", "-"].includes(key)){
    currentInput += key
  }
  else if(key === "Enter"){
    calculate()
    return
  }
  else if(key === "Backspace"){
    currentInput = currentInput.slice(0, -1)
  }
  else if(key.toLowerCase() === "c"){
    currentInput = ""
  }

  inputDisplay(currentInput)
})


// light/dark mode
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light")
})

