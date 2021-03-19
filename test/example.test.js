// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../utils.js';

const test = QUnit.test;

test('it should return 7 if I pass it 3 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 7;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(3, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('subtract should return 5 if I pass it 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('multiply should return 50 if I pass it 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 50;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract should return 2 if I pass it 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
