// Get the result display element
const resultDisplay = document.getElementById('result');

// Clear the display
function clearDisplay() {
  resultDisplay.textContent = '0';
}

// Append a value to the display
function appendValue(value) {
  if (resultDisplay.textContent === '0') {
    resultDisplay.textContent = value;
  } else {
    resultDisplay.textContent += value;
  }
}

// Calculate the result
function calculateResult() {
  try {
    resultDisplay.textContent = eval(resultDisplay.textContent);
  } catch (error) {
    resultDisplay.textContent = 'Error';
  }
}

// Add event listeners to buttons
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');

    if (action === 'clear') {
      clearDisplay();
    } else if (action === '=') {
      calculateResult();
    } else {
      appendValue(action);
    }
  });
});