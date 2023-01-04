// Character set
// [abc] - Matches a or b or c
const characterSetRegex = /[abc]/g;
const characterSetString = "abcdefg";
const characterSetResult = characterSetString.match(characterSetRegex);
console.log(characterSetResult); // [ 'a', 'b', 'c' ]

// Negated set
// [^abc] - Matches anything except a or b or c
const negatedSetRegex = /[^abc]/g;
const negatedSetString = "abcdefg";
const negatedSetResult = negatedSetString.match(negatedSetRegex);
console.log(negatedSetResult); // [ 'd', 'e', 'f', 'g' ]

// Range
// [a-z] - Matches a to z
const rangeRegex = /[a-z]/g;
const rangeString = "abcdefg";
const rangeResult = rangeString.match(rangeRegex);
console.log(rangeResult); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// Dot
// . - Matches any character
const dotRegex = /./g;
const dotString = "abcdefg";
const dotResult = dotString.match(dotRegex);
console.log(dotResult); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

// Match any
// [\s\S] - Matches any character including new line
const matchAnyRegex = /[\s\S]/g;
const matchAnyString = " a b c";
const matchAnyResult = matchAnyString.match(matchAnyRegex);
console.log(matchAnyResult); // [ ' ', 'a', ' ', 'b', ' ', 'c' ]

// Word
// \w - Matches any word character
const wordRegex = /\w/g;
const wordString = "a b c";
const wordResult = wordString.match(wordRegex);
console.log(wordResult); // [ 'a', 'b', 'c' ]

// Not word
// \W - Matches any non-word character
const notWordRegex = /\W/g;
const notWordString = "a b c";
const notWordResult = notWordString.match(notWordRegex);
console.log(notWordResult); // [ ' ', ' ' ]

// Digit
// \d - Matches any digit
const digitRegex = /\d/g;
const digitString = "a1b2c3";
const digitResult = digitString.match(digitRegex);
console.log(digitResult); // [ '1', '2', '3' ]

// Not digit
// \D - Matches any non-digit
const notDigitRegex = /\D/g;
const notDigitString = "a1b2c3";
const notDigitResult = notDigitString.match(notDigitRegex);
console.log(notDigitResult); // [ 'a', 'b', 'c' ]

// Whitespace
// \s - Matches any whitespace
const whitespaceRegex = /\s/g;
const whitespaceString = "a b c";
const whitespaceResult = whitespaceString.match(whitespaceRegex);
console.log(whitespaceResult); // [ ' ', ' ' ]
