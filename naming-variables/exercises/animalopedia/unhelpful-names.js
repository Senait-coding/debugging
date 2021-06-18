alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it'
);

let userInput = null;
while (userInput === null) {
  userInput = prompt('enter an animal');
}

let animalNameInput = '';

let isNotAnimalName = false;
while (!isNotAnimalName) {
  animalNameInput = prompt('tell me something about ' + userInput);

  if (animalNameInput === '' || animalNameInput === null) {
    alert('that is not something');
  } else if (animalNameInput.toLowerCase().includes(userInput.toLowerCase())) {
    isNotAnimalName = true;
  } else {
    alert('nope, not about ' + userInput + '.  try again.');
  }
}

alert('i just learned something cool about ' + userInput + '!\n\n- "' + animalNameInput + '"');
