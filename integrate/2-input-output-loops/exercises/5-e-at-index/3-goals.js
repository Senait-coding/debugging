'use strict';

let validInput = '';

let index = 0;
let isValid = false;
while (!isValid) {
  index = index + 1;

  const userInput = prompt(
    `enter anything with "e" or "E" as the ${index}th letter`
  );

  /* -- BEGIN: validate input -- */
  if(userInput===null || userInput===''){alert('you entered nothing, try again');}

  if(userInput[0]==='e' || userInput[0]==='E'){validInput=userInput;
  break;}
  alert('no there is no "e" as first letter')

  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
