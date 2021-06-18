/* specific
a perogram that asks a user to enter a word which starts with 'e' in every aditonal index) and it tells how many the user scored
*/
let userInputIndex=0;
let inputCheck='entries:';

let isUserInputIndex=true;

while(isUserInputIndex){const userInput=prompt('enter word starts with "e" and index');

if(userInput===null){isUserInputIndex= !confirm('you sure you want to exit?');}

else if(userInput[userInputIndex]==='e'){
  inputCheck = inputCheck + '\n' + userInputIndex + '. "' + userInput + '"';
  userInputIndex=userInputIndex+1;
}

else{inputCheck = inputCheck + '\nx. "' + userInput + '"';
isUserInputIndex=false;}}

alert('your score: ' + userInputIndex + '\n\n' + inputCheck);

