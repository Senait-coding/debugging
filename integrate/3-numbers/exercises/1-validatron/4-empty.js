'use strict';
const userInputString=prompt('enter a number');

const userInputNumber=Number(userInputString);

const userInputIsAnumber=!Number.isNaN(userInputNumber)

const confirmMessage=('you sure you entered number?\n\n' + 'yes->"ok"\n' + 'no->"cancel"\n');
const userThinkInputIsAnumber=confirm(confirmMessage)
const confirmationIsCorrect=(userThinkInputIsAnumber===userInputIsAnumber);
if(confirmationIsCorrect){alert('YES correct!')}
else{alert('nope :(');}
