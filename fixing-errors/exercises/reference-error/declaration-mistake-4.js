'use strict';
/*
  environment:edge
  name:ReferenceError
  message:seven is not defined
  callstack:at eval (eval at <anonymous> (declaration-mistake-4.js:2), <anonymous>:22:7)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)
  life cycle:execution phase
  the mistake: 'seven' was not declared
  the fix(es):declare "seven"
*/
const add = (x = 0, y = 0) => {
  return x + y;
};
let seven = add(3, 4);

console.log(seven);
