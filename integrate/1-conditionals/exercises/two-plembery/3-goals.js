'use strict';

const instructions = `Two-Player Remembery

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    if you get one wrong - game over!
`;
alert(instructions);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

const phrasesToRemember = `Player 2, remember these:
  1. "${phrase1}"
  2. "${phrase2}"
  3. "${phrase3}"
`;
alert(phrasesToRemember);

let points=0;

/* -- BEGIN: gather player 2's guesses) -- */
const guesse1=prompt('player 2, enter your first guess');
console.log(guesse1);
if(guesse1===phrase1){points=points+1;
        alert('your score' + '' + points);}

const guesse2=prompt('player 2 enter your second guess');
console.log(guesse2);
if(guesse2===phrase2){points=points+1;
          alert('your score' + '' + points);}

const guesse3=prompt('player 3 enter your third guess');
console.log(guesse3);
if(guesse3===phrase3){points=points+1;
           alert('your score' +'' + points);}

 else{
  alert(`Game over!`);
}




/* -- END: gather player 2's guesses -- */






