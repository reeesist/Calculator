let screen = document.querySelector('.screen');
let screen1 = document.querySelector('.screen1');
    let currentNum = ''
    let previousNum = ''
    let operator = ''

function add(a, b) {
    return sum = Number(a) + Number(b)
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

// function operate(a, b, operator) {
//     if (operator === "+") {
//         return Number(a) + Number(b)
//     } else if (operator === '-') {
//         return subtract(a, b);
//     } else if (operator === '*') {
//        return multiply(a, b)
//     } else if ()
// }

function handleNumbers(number) {
    currentNum += number;
    screen1.textContent = currentNum
}

function handleOp(op) {
    operator = op;
    previousNum = currentNum;
    screen.textContent = previousNum + " " + operator;
    currentNum = "";
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

function clean() {
    screen.textContent = '';
    screen1.textContent = '0';
    currentNum = '';
    previousNum = '';
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    clean()
})


const equal = document.querySelector('.button14');
equal.addEventListener('click', () => {
    screen1.textContent = '';
    screen.textContent = '';
    screen1.textContent = operate(previousNum, currentNum, operator)
})