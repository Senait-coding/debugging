'use strict';

/*
  environment:crohome

  name:SyntaxError
  message:Unexpected identifier

  callstack: at <anonymous>:2:6
    at HTMLIFrameElement.evaller.onload (study-with.js:56)
    at Object.console (study-with.js:58)
    at JavaScriptFE.studyWith (javascript-class.js:463)
    at HTMLButtonElement.<anonymous> (javascript-class.js:290)

  life cycle: Creation phase error

  the mistake: the inside string was in double quotation""" strings inside one string should be diffrent /single or doulble quotation/

  the fix(es): change the string inside string the quotation mark from doulbe to single
*/

const anchorName = '#Home';

const innerHtml = "<p>Click here to<a href='anchorName'>go home</a></p>";
