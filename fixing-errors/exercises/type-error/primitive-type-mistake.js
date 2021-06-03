'use strict';

/*
  environment:

  name:TypeError
  message:Cannot read property 'length' of null

  callstack: at eval (eval at <anonymous> (primitive-type-mistake.js:2), <anonymous>:20:23)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle: creation phase error

  the mistake: the console can't read the length 

  the fix(es): put console log the the useerinput
*/

const userInput = null;

console.log(userInput);
