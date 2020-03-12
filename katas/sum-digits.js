/*
  The function sumDigits should take a number (not necessarily an integer) and return the total of its digits.
  E.g.
  sumDigits(99)
    --> 18
  sumDigits(10.5)
    --> 6
*/

function sumDigits(number) {
  const digitsToSum = [];
  const numberToStr = number.toString();
  if (numberToStr.length === 1) {
    return number;
  } else {
    for (let i = 0; i < numberToStr.length; i += 1) {
      if (numberToStr.charAt(i) !== ".") {
        digitsToSum.push(+numberToStr.charAt(i));
      }
    }
    const summedDigits = digitsToSum.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    return summedDigits;
  }
}

module.exports = sumDigits;
