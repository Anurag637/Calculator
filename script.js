let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let resultDisplayed = false;

/* Function to append numbers to the display */
function appendNumber(number) {
    if (resultDisplayed) {
        currentInput = number;
        resultDisplayed = false;
    } else {
        currentInput += number;
    }
    display.textContent = currentInput;
}

/* Function to append operators to the display */
function appendOperator(op) {
    if (op === '^') {
        currentInput += ' ** ';
    } else {
        if (currentInput === '' && op !== '-') return;
        if (operator) calculate();
        operator = op;
        currentInput += ' ' + operator + ' ';
    }
    display.textContent = currentInput;
}

/* Function to clear the display */
function clearDisplay() {
    currentInput = '';
    operator = '';
    display.textContent = '0';
}

/* Function to calculate the result */
function calculate() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        operator = '';
        resultDisplayed = true;
    } catch {
        display.textContent = 'Error';
        currentInput = '';
    }
}

/* Function to change the sign of the current number */
function changeSign() {
    if (currentInput !== '') {
        if (currentInput.includes(' ')) {
            let parts = currentInput.split(' ');
            let lastPart = parts[parts.length - 1];
            if (lastPart !== '') {
                parts[parts.length - 1] = (-1 * parseFloat(lastPart)).toString();
                currentInput = parts.join(' ');
            }
        } else {
            currentInput = (-1 * parseFloat(currentInput)).toString();
        }
        display.textContent = currentInput;
    }
}
