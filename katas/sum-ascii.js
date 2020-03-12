/*
  The function sumAscii should take an array of names and calculate each name's score based on the total of each character's lowercase ASCII value. It should return the name with the highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(namesArray) {
  if (namesArray.length === 0) {
    return 0;
  }

  const mapped = namesArray.map(name => {
    let result = [];
    for (let i = 0; i < name.length; i++) {
      result.push(name.charCodeAt(i));
    }
    return result.reduce((acc, curr) => acc + curr);
  });
  return Math.max(...mapped);
}

module.exports = sumAscii;

/*


*/
