'use strict';
/*
  environment:edge
  name:ReferenceError:
  message:Cannot access 'isValidUserName' before initialization
  callstack:at eval (eval at <anonymous> (declaration-mistake-3.js:2), <anonymous>:22:19)
    at <anonymous>:2:1
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)
  life cycle: excution phase
  the mistake:'inValidUserName is declared after initalization
  the fix(es):declare before initalize
*/
const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;
if (userName.length > 3) {
  isValidUserName = true;
}
if (userName.length <= 3) {
  isValidUserName = false;
}
console.log('isValidUserName:', typeof isValidUserName, isValidUserName);