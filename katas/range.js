/*
  The function range should take up to 3 arguments: a length, a start value and a step value.
  If it has only a length, it should return an array of numbers from 0 with length specified.
  If it also has a start value the returned array should start at this value instead of 0.
  If there is also a step value the numbers in the array should increase by the specified step.
  E.g. range(5) --> [0, 1, 2, 3, 4]
  range(5, 2) --> [2, 3, 4, 5, 6]
  range(5, 2, 2) --> [2, 4, 6, 8, 10]
*/

function range(length, start, step) {
  const rangeNumbers = [];
  const totalLength = length + start;

  if (length > 0 && start === 0 && step === 0) {
    for (let i = 0; i < totalLength; i++) {
      rangeNumbers.push(i);
    }
  } else if (length > 0 && start > 0 && step === 0) {
    for (let i = start; i < totalLength; i++) {
      rangeNumbers.push(i);
    }
  } else {
    for (let i = start; i < length * step + start; i += step) {
      rangeNumbers.push(i);
    }
  }
  return rangeNumbers;
}

module.exports = range;
