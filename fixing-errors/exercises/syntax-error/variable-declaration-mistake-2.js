'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake: the const was undefined 

  the fix(es):relace the const by let 
*/

//const userName = 'qopiznu';
const userName = 'qop';
let path;

if (userName.length > 4) {
  path = 'if';
} else {
  path = 'else';
}

console.log(path);
