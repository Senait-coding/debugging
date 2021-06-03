'use strict';


/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake: the 'break' was put uncessarly 

  the fix(es):change the "break" with the "return"
*/


const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);
console.log(seven);
