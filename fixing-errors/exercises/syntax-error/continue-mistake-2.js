'use strict';


/*
  environment:chrome

  name:SyntaxError
  message:Undefined label 'x'

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.j

  life cycle: creation phase

  the mistake: putting "contuinue" instead of "return"

  the fix(es): put return instead of continue
*/


const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);
console.log(seven);
