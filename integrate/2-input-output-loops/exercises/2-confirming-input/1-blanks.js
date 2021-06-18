'use strict';

let userInput = '';
while (true) {
  userInput = prompt('enter your name:');
  console.log('userInput:', typeof userInput, userInput);

  if (!userInput.includes('senait')) {
    alert('nothing is not a name');
    continue;
  }

  // which user interaction returns a boolean value?
  // const confirmMessage = 'is this correct?\n"' + userInput + '"';
  // const userDidConfirm = _(confirmMessage);
  // console.log('userDidConfirm:', typeof userDidConfirm, userDidConfirm);

  // which variable above has a value representing the user's confirmation?
  if (userInput.includes('senait')) {confirm('is this correct?\n"' + userInput + '"'+''+ '?')
  

const finalMessage = `your name is: "${userInput}"`;
alert(finalMessage);
break;}}
