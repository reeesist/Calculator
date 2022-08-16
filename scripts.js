let screen = document.querySelector('.screen');
let screen1 = document.querySelector('.screen1');
    let currentNum = 0
    let previousNum = 0
    let operator = ''

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

function handleNumbers(number) {
    currentNum += number;
    screen1.textContent = currentNum
}

function handleOp(op) {
    operator = op;
    previousNum = currentNum;
    screen.textContent = previousNum + " " + operator;
    currentNum = '';
    screen1.textContent = '';
}

const numbers = document.querySelectorAll('.num')

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
       handleNumbers(e.target.textContent)
    })
})

const operators = document.querySelectorAll('.op');
operators.forEach((button) => { 
    button.addEventListener('click', (e) => { 
    handleOp(e.target.textContent)
    })
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    return screen.textContent = ''
})

