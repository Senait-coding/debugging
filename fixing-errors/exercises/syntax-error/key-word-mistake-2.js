'use strict';

/*
  environment:edge

  name:SyntaxError
  message: Unexpected identifier

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)


  life cycle: creation phase error

  the mistake:the const was inculeded uncessarly, and while the for loop was declared the '=' sign was placed uncessarly 

  the fix(es): delete the const and '=' sign 

  //PROGRAM WITH BUG

const for = (let i = 0; i < 5; i++) {
  console.log(i);
}
*/
//BUG FIXED

for (let i= 0; i < 5; i++) {
  console.log(i);
}


