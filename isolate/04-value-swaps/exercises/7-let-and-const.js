'use strict';
console.log('-- begin --');

// write code to pass asserts a, b, c
// fill in the blanks for d and temp

// leave this code as it is
let a = 'y';
let b = 'z';
let c = 'x';
let temp;

temp = a;//y
a = b;//z
const d = a;//z

// write some code, be sure to use temp!
a=c;
c=b;
b=temp;

// fill in in the _'s to pass the final assertions

const isTrue1 = a === 'x';
console.assert(isTrue1, 'Test 1');

const isTrue2 = b === 'y';
console.assert(isTrue2, 'Test 2');

const isTrue3 = c === 'z';
console.assert(isTrue3, 'Test 3');

const isTrue4 = d === 'z';
console.assert(isTrue4, 'Test 4');

const isTrue5 = temp === 'y';
console.assert(isTrue5, 'Test 5');


console.log('-- end --')