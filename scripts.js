const screen = document.querySelector('.screen');
    screen.textContent = ""


function add(a, b) {
    return sum = a + b
}

function subtract(a, b) {
    return sum = a - b
}

function multiply(a, b) {
    return sum = a * b
}

function divide(a, b) {
    return sum = a / b
}


function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}
