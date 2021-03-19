
import { add, subtract, multiply, divide} from './utils.js';

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const result = document.getElementById('result');

export function handleResultClick() {
    const operation = document.getElementById('operator-selector').selectedIndex;
    switch (operation) {
        case 0: 
            result.textContent = add(Number(input1.value), Number(input2.value)); 
            break;
        case 1:
            result.textContent = subtract(Number(input1.value), Number(input2.value)); 
            break;
        case 2:
            result.textContent = multiply(Number(input1.value), Number(input2.value));
            break;
        case 3:
            result.textContent = divide(Number(input1.value), Number(input2.value));
            break;
        default:
            result.textContent = "Please input numbers!";
    }
}

