alert('you will need to userInput strings with "e" in the right place');

let inputIndex = 0;

let inputCheck = 'entries:';

let userInputWithe = true;
while (userInputWithe) {
  const userInput = prompt('userInput a string with "e" at index ' + inputIndex);

  if (userInput === null) {
    userInputWithe = !confirm('are you sure you want to exit?');
  } else if (userInput[inputIndex] === 'e') {
    inputCheck = inputCheck + '\n' + inputIndex + '. "' + userInput + '"';
    inputIndex = inputIndex + 1;
  } else {
    inputCheck = inputCheck + '\nx. "' + userInput + '"';
    userInputWithe = false;
  }
}

alert('your score: ' + inputIndex + '\n\n' + inputCheck);
