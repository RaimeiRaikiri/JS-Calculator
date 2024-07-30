// To use for the calculations
let num1 = '';
let operator = '';
let num2 = '';

const display = document.querySelector('#display');

const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');
const buttonThree = document.querySelector('#three');
const buttonFour = document.querySelector('#four');
const buttonFive = document.querySelector('#five');
const buttonSix = document.querySelector('#six');
const buttonSeven = document.querySelector('#seven');
const buttonEight = document.querySelector('#eight');
const buttonNine = document.querySelector('#nine');

const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const divideButton = document.querySelector('#divide');
const multiplyButton = document.querySelector('#multiply');
const remainderButton = document.querySelector('#remainder');

const allClearButton = document.querySelector('#allClear');
const decimalButton = document.querySelector('#decimalPlace');
const plusMinus = document.querySelector('#plusMinus');
const equalsButton = document.querySelector('#equals');

function inputOne(){
    if (num1.length < 10 && num1.includes('.'))
        {
            num1 += '1'
        }
    else if (num1.length < 9)
        {
            num1 += '1'
        }
    display.textContent = num1;

}

buttonOne.addEventListener('click', inputOne);
