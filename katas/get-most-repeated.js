/*
  The function getMostRepeated should take a string and return the character that is most repeated throughout the string, ignoring whitespace and special characters. If two characters are both equally common, return the one that comes first alphabetically.
  If you have already implemented the getFrequencies function, it may be helpful! It is imported into this file for you to use if you wish.
*/

const getFrequencies = require("./get-frequencies");

function getMostRepeated(str) {
  const frequencies = getFrequencies(str);
  const highestFrequency = Object.entries(frequencies);
  highestFrequency.push(frequencies);

  highestFrequency.sort((a, b) => b[1] - a[1]);
  return highestFrequency[0][0];
}

module.exports = getMostRepeated;
