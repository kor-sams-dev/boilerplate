// reserved characters: . * + ? ^ $ { } ( ) | [ ] / \
const reservedCharctersRegex = /[\.\*\+\?\^\$\{\}\(\)\|\[\]\/\\]/g;
const reservedCharctersString = "a.b*c+d?e^f$g{h}i(j)k|l[m]n/o\\p";
const reservedCharctersResult = reservedCharctersString.match(
  reservedCharctersRegex
);
console.log({
  title: "Reserved characters",
  string: reservedCharctersString,
  match: reservedCharctersResult,
}); // [ '.', '*', '+', '?', '^', '$', '{', '}', '(', ')', '|', '[', ']', '/', '\\' ]

// octal escape
// \0 - Matches null character
const octalEscapeRegex = /\251/g;
const octalEscapeString = "RegExr is ©2014";
const octalEscapeResult = octalEscapeString.match(octalEscapeRegex);
console.log({
  title: "Octal escape",
  string: octalEscapeString,
  match: octalEscapeResult,
}); // [ '©' ]

// hex escape
// \xhh - Matches a character with hex code hh
const hexEscapeRegex = /\x61/g;
const hexEscapeString = "a";
const hexEscapeResult = hexEscapeString.match(hexEscapeRegex);
console.log({
  title: "Hex escape",
  string: hexEscapeString,
  match: hexEscapeResult,
}); // [ 'a' ]

// unicode escape
// \uhhhh - Matches a character with unicode code hhhh
const unicodeEscapeRegex = /\u00A9/g;
const unicodeEscapeString = "RegExr is ©2014";
const unicodeEscapeResult = unicodeEscapeString.match(unicodeEscapeRegex);
console.log({
  title: "Unicode escape",
  string: unicodeEscapeString,
  match: unicodeEscapeResult,
}); // [ '©' ]

// unicode code point escape
// \u{hhhhhh} - Matches a character with unicode code point hhhhhh
const unicodeCodePointEscapeRegex = /\u{1F600}/gu;
const unicodeCodePointEscapeString = "😀";
const unicodeCodePointEscapeResult = unicodeCodePointEscapeString.match(
  unicodeCodePointEscapeRegex
);
console.log({
  title: "Unicode code point escape",
  string: unicodeCodePointEscapeString,
  match: unicodeCodePointEscapeResult,
}); // [ '😀' ]

// named unicode escape
// \p{UnicodePropertyName=UnicodePropertyValue} - Matches a character with unicode property UnicodePropertyName and value UnicodePropertyValue
const namedUnicodeEscapeRegex = /\p{Script=Latin}/gu;
const namedUnicodeEscapeString = "a";
const namedUnicodeEscapeResult = namedUnicodeEscapeString.match(
  namedUnicodeEscapeRegex
);
console.log({
  title: "Named unicode escape",
  string: namedUnicodeEscapeString,
  match: namedUnicodeEscapeResult,
}); // [ 'a' ]

// control character escape
// \cX - Matches a control character with code X
// 제어 문자를 체크 할 때 사용
const controlCharacterEscapeRegex = /\cA/g;
const controlCharacterEscapeString = "a";
const controlCharacterEscapeResult = controlCharacterEscapeString.match(
  controlCharacterEscapeRegex
);
console.log({
  title: "Control character escape",
  string: controlCharacterEscapeString,
  match: controlCharacterEscapeResult,
}); // [ 'a' ]

// tab
// \t - Matches a tab character
const tabRegex = /\t/g;
const tabString = "a\tb";
const tabResult = tabString.match(tabRegex);
console.log({ title: "Tab", string: tabString, match: tabResult }); // [ '\t' ]

// line feed
// \n - Matches a line feed character
const lineFeedRegex = /\n/g;
const lineFeedString = `a
b`;
const lineFeedResult = lineFeedString.match(lineFeedRegex);
console.log({
  title: "Line feed",
  string: lineFeedString,
  match: lineFeedResult,
}); // [ '

// carriage return
// \r - Matches a carriage return character
const carriageReturnRegex = /\r/g;
const carriageReturnString = "a\rb";
const carriageReturnResult = carriageReturnString.match(carriageReturnRegex);
console.log({
  title: "Carriage return",
  string: carriageReturnString,
  match: carriageReturnResult,
}); // [ '\r' ]

// vertical tab
// \v - Matches a vertical tab character
const verticalTabRegex = /\v/g;
const verticalTabString = "a\vb";
const verticalTabResult = verticalTabString.match(verticalTabRegex);
console.log({
  title: "Vertical tab",
  string: verticalTabString,
  match: verticalTabResult,
}); // [ '\v' ]

// form feed
// \f - Matches a form feed character
const formFeedRegex = /\f/g;
const formFeedString = "a\fb";
const formFeedResult = formFeedString.match(formFeedRegex);
console.log({
  title: "Form feed",
  string: formFeedString,
  match: formFeedResult,
}); // [ '\f' ]
