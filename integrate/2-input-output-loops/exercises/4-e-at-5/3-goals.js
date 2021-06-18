'use strict';


let validInput = '';
let isNotValid = true;
while (isNotValid) {
  const userInput = prompt('enter anything with "e" or "E" as the 5th letter');

  /* -- BEGIN: validate input -- */
  if (userInput===null || userInput===''){alert('that is nothing');}
  else if(userInput.length<5){alert('too small, try again');}
  else if (userInput[4]==='e' || userInput[4]==='E')
  {validInput = userInput;
  break;}

  alert('there is no "e" or "E" in  as 5th letter, try again');

  /* -- END: validate input -- */
}

alert('done: "' + validInput + '"');
