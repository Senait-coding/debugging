'use strict';
let userInput = '';

while (userInput==='') {userInput=prompt('enter 6 character word');
  /* -- BEGIN: validate input -- */
if(userInput===''){
continue;
}
if(userInput.length<6){alert('too short');
continue;
}
else if (userInput.length===6){alert('perfect');
continue;
}
else{alert('too long')}
  /* -- END: validate input -- */


const finalMessage =
  '"' + userInput + '" is ' + userInput.length + ' characters long';
alert(finalMessage);}
