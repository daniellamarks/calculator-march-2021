// import functions and grab DOM elements

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

    console.log(value1, value2);

    const sum = Number(value1) + Number(value2);

    console.log(sum);

    display1.textContent = sum;    
});

subtractButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;

    console.log(value1, value2);

    const difference = Number(value1) - Number(value2);

    console.log(difference);

    display1.textContent = difference;    
});

multiplyButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;

    console.log(value1, value2);

    const product = Number(value1) * Number(value2);

    console.log(product);

    display1.textContent = product;    
});

divideButton.addEventListener('click', () => {
    const value1 = input1.value;
    const value2 = input2.value;

    console.log(value1, value2);

    const quotient = Number(value1) / Number(value2);

    console.log(quotient);

    display1.textContent = quotient;    
});

const clearButton = document.getElementById("clear")

clearButton.addEventListener('click', () => {
    input1.value = '';
    input2.value = '';
    display1.textContent = '';
});
// initialize state

// set event listeners to update state and DOM