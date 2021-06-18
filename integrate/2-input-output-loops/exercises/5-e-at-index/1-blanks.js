'use strict';

let validInput = '';

let index = 0;
while (validInput === '') {
  index = 0 + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`
  );

  if (userInput === null || userInput === '') {
    alert('that is nothing');
  } else if (userInput.length < 3) {
    alert('too short');
  } else if (userInput[0] === 'e' || userInput[0] === 'E') {
    validInput = userInput;
  } else {
    alert('try again');
  }
}

alert('done: "' + validInput + '"');
