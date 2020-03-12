/*
  The function caesarCipher should take a string and a number (n) and return a new string with a Caesar cipher applied. A Caesar cipher replaces each plaintext letter with a different one a fixed number of places up or down the alphabet. N represents the number of shifts up or down the alphabet should be applied. It may be negative or positive.
  E.g.
  caesarCipher('hello', 2)
    --> 'jgnnq'
  caesarCipher('hello world!', -3)
    --> 'ebiil tloia!'
*/

function caesarCipher(str, num) {
  if (str.length === 0) {
    return "";
  }
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lettersArray = str.split("");
  const cipheredLetters = lettersArray.map(letter => {
    const index = alphabet.indexOf(letter);
    if (letter === " ") {
      return " ";
    } else if (index + num < 0) {
      return alphabet[26 + (index + num)];
    } else if (index + num >= 26) {
      return alphabet[index + num - 26];
    }
    return alphabet[index + num];
  });
  return cipheredLetters.join("");
}

module.exports = caesarCipher;
