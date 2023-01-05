// beginning
// ^ - beginning of the string
const beginningExp = /^Hello/;
const beginningString = "Hello World";
console.log("beginning basic:", beginningExp.test(beginningString)); // true

const beginningExpFalse = /^World/;
const beginningStringFalse = "Hello World";
console.log("beginning false:", beginningExpFalse.test(beginningStringFalse)); // false

// end
// $ - end of the string
const endExp = /World$/;
const endString = "Hello World";
console.log("end basic:", endExp.test(endString)); // true

const endExpFalse = /Hello$/;
const endStringFalse = "Hello World";
console.log("end false:", endExpFalse.test(endStringFalse)); // false

// word boundary
// \b - word boundary
const wordBoundaryExp = /\bWorld\b/;
const wordBoundaryString = "Hello World";
console.log("word boundary basic:", wordBoundaryExp.test(wordBoundaryString)); // true

const wordBoundarySingleLeftExp = /\bWorld/;
const wordBoundarySingleLeftString = "Hello World";
console.log(
  "word boundary single left:",
  wordBoundarySingleLeftExp.test(wordBoundarySingleLeftString)
); // true

const wordBoundarySingleRightExp = /World\b/;
const wordBoundarySingleRightString = "Hello World";
console.log(
  "word boundary single right:",
  wordBoundarySingleRightExp.test(wordBoundarySingleRightString)
); // true

const wordBoundaryExpFalse = /False\b/;
const wordBoundaryStringFalse = "Hello World";
console.log(
  "word boundary false:",
  wordBoundaryExpFalse.test(wordBoundaryStringFalse)
); // false

// not word boundary
// \B - not word boundary
const notWordBoundaryExp = /\BWorld\B/;
const notWordBoundaryString = "Hello World";
console.log(
  "not word boundary basic:",
  notWordBoundaryExp.test(notWordBoundaryString)
); // false
