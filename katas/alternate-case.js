/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  const charArray = str.split("");
  let alternatedCase = [];
  let lastLetter = "lowercase";
  for (let i = 0; i < charArray.length; i++) {
    if (charArray[i] === " " && lastLetter === "uppercase") {
      alternatedCase.push(charArray[i]);
      lastLetter = "uppercase";
    } else if (charArray[i] === " " && lastLetter === "lowercase") {
      alternatedCase.push(charArray[i]);
      lastLetter = "lowercase";
    } else if (lastLetter === "lowercase") {
      alternatedCase.push(charArray[i].toUpperCase());
      lastLetter = "uppercase";
    } else {
      alternatedCase.push(charArray[i].toLowerCase());
      lastLetter = "lowercase";
    }
  }
  return alternatedCase.join("");
}

module.exports = alternateCase;
