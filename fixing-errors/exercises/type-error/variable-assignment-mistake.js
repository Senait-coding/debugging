'use strict';

/*
  environment: chrome

  name:SyntaxError:
  message:Invalid left-hand side in assignment

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle: creation phase

  the mistake: invalid left side assignment 

  the fix(es): put the assignment on the right side
*/

let isHappy = false;

 isHappy=ture;
