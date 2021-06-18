'use strict';
let validOutput=''
let validInput=true;
while(validInput){let userInput=prompt('enter any word which the 4th letter is "a" ');

if(userInput===null || userInput===''){alert('you enter nothing ');
continue;}

else if(userInput.length<4){alert('too small');}

  else if (userInput[3]==='a' || userInpu[3]==='A'){
    validOutput=userInput;
    break;
  }
   alert('the entered letters do not have "a" at it 3th index');}
  

  alert('perfet!' + '  ' + validOutput + " ");
