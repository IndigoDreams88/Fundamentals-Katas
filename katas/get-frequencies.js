/*
  The getFrequencies function should take a string and return an object that represents the frequencies of each character in the string. It should ignore spaces and special characters.
  E.g. 'hello world' would return:
  {
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    w: 1,
    r: 1,
    d: 1
  }
*/

function getFrequencies(str) {
  const charFrequency = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in charFrequency === false) {
      charFrequency[str[i]] = 1;
    } else {
      charFrequency[str[i]] = charFrequency[str[i]] + 1;
    }
  }

  return charFrequency;
}

module.exports = getFrequencies;
