'use strict';

/*
  environment: chrome

  name:SyntaxError
  message:Illegal return 

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle: creation phase

  the mistake: the retrun statment was inculded wrongly

  the fix(es): replace the return statment with break
*/

let iterations = 0;

while (true) {
  iterations += 1;

  if (iterations > 8) {
    break;
  }


console.log(iterations);}
