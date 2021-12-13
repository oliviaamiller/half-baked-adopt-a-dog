import './example.test.js';
import { renderDogCard, renderDogDetail } from '../render-utils.js';   


const test = QUnit.test;

test('renderDogCard is a function that will return DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderDogDetail is a function that will return DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});