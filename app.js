// import functions and grab DOM elements
import { handleResultClick } from './clickHandlers.js';

// eslint-disable-next-line quotes
const equalsButton = document.getElementById("equals-button");

equalsButton.addEventListener('click', handleResultClick);