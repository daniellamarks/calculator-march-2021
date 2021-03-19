// import functions and grab DOM elements
import { add, subtract, multiply, divide } from ./utils.js

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const display1 = document.getElementById('answer');

addButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    const sum = add(Number(value1), Number(value2))
    display1.textContent = sum;    
});

subtractButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    const difference = subtract(Number(value1), Number(value2))
    display1.textContent = difference;    
});

multiplyButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    const product = multiply(Number(value1),Number(value2))
    display1.textContent = product;    
});

divideButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;
    const quotient = divide(Number(value1), Number(value2))
    display1.textContent = quotient;    
});

const clearButton = document.getElementById("clear")

clearButton.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    display1.textContent = '';
});
