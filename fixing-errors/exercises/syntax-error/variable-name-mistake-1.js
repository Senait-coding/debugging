'use strict';


/*
  environment: chrome

  name:SyntaxError
  message:Unexpected number

  callstack: at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)


  life cycle: creation phase error

  the mistake:the variable name "3" , we can't name variables with a number 

  the fix(es): change the variable name
*/


const x= 'three';
