'use strict';

/*
  environment:

  name:
  message:

  callstack:

  life cycle:

  the mistake: on line 18 the function brakets were missed

  the fix(es):put the function brakets
*/

const add = (x = 0, y = 0) => {
  return x + y;
};

const seven = add(3, 4);
console.log(seven);
