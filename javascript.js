// To use for the calculations
let num1 = '';
let operator = '';
let num2 = '';

let operatorAvaliable = false;
let operatorPressed = false;
let equalsAvaliable = false;

const display = document.querySelector('#display');

const buttonZero = document.querySelector('#zero')
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

function checkForOperatorAvaliable()
{
    if (num1 !== '')
        {
            operatorAvaliable = true;
        }
    if (num2 !== '')
        {
            operatorAvaliable = false;
        }
}
function canAddMoreNumbersToCalculation(input)
{
    if (input.includes('.') && input.length < 10)
        {
            return true;
        }
    else if (input.length < 9)
        {
            return true;
        }
    else 
    {
        return false;
    }
}

function addNumber(number)
{
    if (operatorPressed)
        {
            if (canAddMoreNumbersToCalculation(num2))
                {
                    num2 += number;
                    equalsAvaliable = true;
                }
        }
    else 
        {
            if(canAddMoreNumbersToCalculation(num1))
                {
                    num1 += number;
                }
            }
            
            display.textContent = num1 + ' ' + operator + ' ' + num2;
            checkForOperatorAvaliable();
}

function addOperator(currentOperator) {
    if (operatorAvaliable)
        {
            operatorPressed = true;
            switch (currentOperator)
                {
                    case '+':
                        operator = '+';
                        display.textContent = num1 + ' ' + operator + ' ' + num2;
                        break;
                    case '-':
                        operator = '-';
                        display.textContent = num1 + ' ' + operator + ' ' + num2;
                        break;
                        
                    case '÷':
                        operator = '÷';
                        display.textContent = num1 + ' ' + operator + ' ' + num2;
                        break;

                    case '×':
                        operator = '×';
                        display.textContent = num1 + ' ' + operator + ' ' + num2;
                        break;

                    case '%':
                        operator = '%';
                        display.textContent = num1 + ' ' + operator + ' ' + num2;
                        break;

                }
        }
}

function allClear()
{
    operatorAvaliable = false;
    operatorPressed = false;
    equalsAvaliable = false;
    num1 = '';
    num2 = '';
    operator = '';
    display.textContent = num1 + ' ' + operator + ' ' + num2;
}

buttonZero.addEventListener('click', () => addNumber('0'));
buttonOne.addEventListener('click', () => addNumber('1'));
buttonTwo.addEventListener('click', () => addNumber('2'));
buttonThree.addEventListener('click', () => addNumber('3'));
buttonFour.addEventListener('click', () => addNumber('4'));
buttonFive.addEventListener('click', () => addNumber('5'));
buttonSix.addEventListener('click', () => addNumber('6'));
buttonSeven.addEventListener('click', () => addNumber('7'));
buttonEight.addEventListener('click', () => addNumber('8'));
buttonNine.addEventListener('click', () => addNumber('9'));

addButton.addEventListener('click', () => addOperator('+'));
subtractButton.addEventListener('click', () => addOperator('-'));
divideButton.addEventListener('click', () => addOperator('÷'));
multiplyButton.addEventListener('click', () => addOperator('×'));
remainderButton.addEventListener('click', () => addOperator('%'));

allClearButton.addEventListener('click', allClear);

