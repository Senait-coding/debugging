'use strict';

/*
  environment:

  name:SyntaxError
  message:Unexpected token '{'

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle: creation phase error

  the mistake: the return sign(=>) was missed

  the fix(es):put the return sign(=>)
*/

const add = (x = 0, y = 0)=>{
  return x + y;
};

const seven = add(3, 4);
console.log(seven);
