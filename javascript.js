// To use for the calculations
let num1 = '';
let operator = '';
let num2 = '';

const display = document.querySelector('#display');
const buttonOne = document.querySelector('#one');

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
