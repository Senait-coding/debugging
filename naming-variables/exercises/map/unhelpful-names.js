let _a = null;
while (_a === null) {
  _a = prompt('enter some text, can you guess what the program does?');
}

let _b = '';
for (const _c of _a) {
  if ('aeiou'.includes(_c)) {
    _b = _b + _c.toUpperCase();
  } else if ('AEIOU'.includes(_c)) {
    _b = _b + _c.toLowerCase();
  } else {
    _b = _b + _c;
  }
}

alert(_b);
