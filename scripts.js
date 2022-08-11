let screen = document.querySelector('.screen');
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

// const button1 = document.querySelector('.button1');
// const button2 = document.querySelector('.button2');
// const button3 = document.querySelector('.button3');
// const button4 = document.querySelector('.button4');
// const button5 = document.querySelector('.button5');
// const button6 = document.querySelector('.button6');
// const button7 = document.querySelector('.button7');
// const button8 = document.querySelector('.button8');
// const button9 = document.querySelector('.button9');
// const button10 = document.querySelector('.button10');
// const button11 = document.querySelector('.button11');
// const button12 = document.querySelector('.button12');
// const button13 = document.querySelector('.button13');
// const button14 = document.querySelector('.button14');
// const button15 = document.querySelector('.button15');
// const button0 = document.querySelector('.button0');

const numbers = document.querySelectorAll('.num')

numbers.forEach((button) => {
    button.addEventListener('click', (e) => {
        screen.textContent += e.target.innerText
    })
})

const operators = document.querySelectorAll('.op');
operators.forEach((button) => {
    button.addEventListener('click', (e) => {
        screen.textContent += ` ${e.target.innerText} `
    })
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    return screen.textContent = ''
})

