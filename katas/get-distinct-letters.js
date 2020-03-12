/*
  The function getDistinctLetters should take two strings and return a string of all the letters that are unique to either of the input strings, in alphabetical order.

  For example, when given 'hello' and 'world', the function should return 'dehrw'
  This is because h and e are in 'hello' but not in 'world', and w, r and d are in 'world' but not in 'hello'. hewrd' sorted => 'dehrw'
*/

function getDistinctLetters(str1, str2) {
  const array1 = str1.split("");
  const array2 = str2.split("");
  const distinctLetters = [];

  array1.filter(letter => {
    if (!array2.includes(letter)) {
      distinctLetters.push(letter);
    }
  });
  array2.filter(letter => {
    if (!array1.includes(letter)) {
      distinctLetters.push(letter);
    }
  });
  return distinctLetters.sort().join("");
}

module.exports = getDistinctLetters;
