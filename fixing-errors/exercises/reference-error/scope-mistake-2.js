'use strict';

/*
  environment:

  name:ReferenceError
  message:isValidUserName is not defined

  callstack: at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle:excutioon phase

  the mistake: the variable name 'isValidUserName' is was not declared 

  the fix(es): the variable user name declared with let as we can't reassign the const the value of const as true or false and delete the const under the if condition
*/

 const userName = 'chiobin';
 //line 24 has inculded for testing purpose
// const userName = 'ch';
console.log('userName:', typeof userName, userName);
let isValidUserName=true;
if (userName.length > 4) {
   isValidUserName = true;
} else {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
