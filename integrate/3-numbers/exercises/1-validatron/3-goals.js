'use strict';

const userString = prompt('enter a number:');

/* -- BEGIN: check if input is a number -- */
const inputIsANumber=Number(userString)
const userInputIsAnumber=!Number.isNaN(inputIsANumber)

/* -- END -- */

/* -- BEGIN: ask the user if they think their input is a number -- */
const confirmMessage=('are you sure you entered number?\n\n' +  'yes-> "ok"\n' + 'no->"cancel"\n');
const userThinksItsANumber=confirm(confirmMessage);
/* -- END -- */

const userIsCorrect = (userThinksItsANumber === userInputIsAnumber);

if (userIsCorrect) {
  alert('correct!');
  
} else {
  alert('nope :(');
}
