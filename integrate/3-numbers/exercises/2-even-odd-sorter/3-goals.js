'use strict';

  let userNumber = NaN;
  
while (true) {const userInput = prompt('enter a number');

  userNumber=Number(userNumber);
  userNumber=!Number.isNaN(userNumber);
   userNumber=userInput;
 

const message = userNumber % 2 === 0 ? ' is even' : ' is odd';
alert(userNumber + message);

break;}
