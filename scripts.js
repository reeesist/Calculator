let screen = document.querySelector('.screen');
let screen1 = document.querySelector('.screen1');
    let currentNum = ''
    let previousNum = ''
    let operator = ''
    let op = ''

function add(a, b) {
    return previousNum = Number(a) + Number(b)
}
function subtract(a, b) {
    return previousNum = a - b
}
function multiply(a, b) {
    return previousNum = a * b
}
function divide(a, b) {
    if (currentNum <= 0) {
        return previousNum = 'what you doing, huh?'
    } else {
    return previousNum = a / b
}}

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

const numbers = document.querySelectorAll('.num')

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
       handleNumbers(e.target.textContent)
    })
})

function handleOp(op) {
    if (previousNum !== '' && currentNum !== '') { 
        screen.textContent = operate(previousNum, currentNum, operator)
        operator = op;
        op = ''
        screen1.textContent = '0'
        currentNum = ''
    } else {
        operator = op;
        previousNum = currentNum;
        screen.textContent = previousNum
        currentNum = "";
        screen1.textContent = '0';
    }}

const operators = document.querySelectorAll('.op');
operators.forEach((button) => { 
    button.addEventListener('click', (e) => { 
        if (op === '' && currentNum !== '') {
    handleOp(e.target.textContent)
        } else return
    })
})

// cleans everything

function clean() {
    screen.textContent = '';
    screen1.textContent = '0';
    currentNum = '';
    previousNum = '';
    operator = ''
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    clean()
})

// equal

const equal = document.querySelector('.button14');
equal.addEventListener('click', () => {
    if (currentNum !== '' && previousNum == '' || currentNum === '' && previousNum !== '') {
        return
    } else {
    screen1.textContent = '';
    screen.textContent = '';
    screen.textContent = operate(previousNum, currentNum, operator)
    currentNum = ''
}})

del = document.querySelector('.del')
del.addEventListener('click', () => {
   currentNum = currentNum.slice(0, -1)
   screen1.textContent = screen1.textContent.slice(0, -1)
})

decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (e) => {
    if (screen1.textContent.includes('.') === true) {
        return 
       } else handleNumbers(e.target.textContent)
})

