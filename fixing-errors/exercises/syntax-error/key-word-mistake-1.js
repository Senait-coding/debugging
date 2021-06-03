'use strict';

/*
  environment:chrome

  name:SyntaxError
  message:Unexpected strict mode 

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle:creatuuib phase error

  the mistake: the for loop was written as conditonal (if)

  the fix(es): change the conditional (if) with for loop
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}
