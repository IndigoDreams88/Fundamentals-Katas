/*
  The function getMiddleChar should return the middle character of a string. If the string is of even lengthgth, return the middle two characters.
  It should ignore any whitespace and special characters.
  E.g.
  'hello world!!' should return 'ow'
*/

function getMiddleChar(str) {
  const length = str.length;
  const middle = length / 2;

  if (length === 0) {
    return str;
  } else if (length % 2 === 0) {
    return str.slice(middle - 1, middle + 1);
  } else {
    return str[Math.floor(middle)];
  }
}

//Math.floor() rounds the number down to the next whole integer.

module.exports = getMiddleChar;
