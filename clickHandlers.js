
import { add, subtract, multiply, divide} from './utils.js';

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const result = document.getElementById('result');

export function handleResultClick() {
    const operation = document.getElementById('operator-selector').selectedIndex;
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    switch (operation) {
        case 0: 
            result.textContent = add(value1, value2); 
            break;
        case 1:
            result.textContent = subtract(value1, value2); 
            break;
        case 2:
            result.textContent = multiply(value1, value2);
            break;
        case 3:
            result.textContent = divide(value1, value2);
            break;
        default:
            result.textContent = "Please input numbers!";
    }
}

