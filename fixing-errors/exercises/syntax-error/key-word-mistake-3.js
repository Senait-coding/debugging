'use strict';

/*
  environment: edge

  name:SyntaxError:
  message:Unexpected token '{'

  callstack:at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)


  life cycle:Creation phase error

  the mistake: the condition on line 40 was only 'else' 

  the fix(es): the conditon on line 40 was amended to read as "else if" inorder to have he intended output
*/

// const userName = 'indrogo';

// if (userName.length < 3) {
//   console.log('too short');

// } else  (userName.length < 5) {
//   console.log('just right');

// } else {
//   console.log('too long');
// }


const userName = 'indrogo';
if (userName.length < 3) {
  console.log('too short');

} else if (userName.length < 5) {
  console.log('just right');

} else {
  console.log('too long');
}
