'use strict';

/*
  environment:edge

  name:ReferenceError
  message:Cannot access 'tomatoes' before initialization

  callstack:at eval (eval at <anonymous> (reading-variable-mistake.js:2), <anonymous>:18:13)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle:execution phase

  the mistake: the console ased to print before declaring and initalizing a value 

  the fix(es): first declare and initalize the variable and then ask for console.log
*/

let tomatoes = 'fresh';
console.log(tomatoes);

