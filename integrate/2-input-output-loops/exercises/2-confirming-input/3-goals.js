'use strict';

let userInput = '';
let isValidName = true;
while (isValidName) {userInput=prompt('enter your name')
  /* -- BEGIN: validate input -- */

  const userConfirm=userInput +"  "+ 'is your name?'
  isValidName=alert(userConfirm)
  /* -- END: validate input -- */
}

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
