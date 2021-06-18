'use strict';

let userInput = '';
while (true) {
  userInput = prompt('tell me something about frogs');

  /* -- BEGIN: validate input -- */

  if(userInput===null || userInput===''){alert('that is not somthing');
  continue;}
  if(!userInput.includes('frog')){alert('nope ,not about frog, tell me something please');
  continue;
  }
  else{userInput;}

  /* -- END: validate input -- */

const finalMessage =
  'i just learned something cool about frogs!\n\n- "' + userInput + '"';
alert(finalMessage);
break;}
