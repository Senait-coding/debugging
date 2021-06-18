'use strict';
console.log('-- begin --');

/* Uppercaseify

  you can use for loops to do some logic for each element in a string

  this loop should create a new string with each character upper-cased

*/

const lowerCaseString = 'abcde';
console.log('lowerCaseString:', lowerCaseString);

let upperCaseString = '';

for (let i=0; i<1; i++) {
  const nextLetter = lowerCaseString[0];
  const letterUpperCased = lowerCaseString.toUpperCase();
  upperCaseString = letterUpperCased;

  console.log(i); // your stepper variable
  console.log('upperCaseString:', upperCaseString);
}

console.assert(
  upperCaseString === 'ABCDE',
  'upper case string is all upper case'
);


console.log('-- end --');