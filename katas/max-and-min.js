/*
  Create two functions, max and min, which return the maximum and the minimum values in an array.
  If the array has no items, you should return 0.
*/

function max(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return Math.max(...numbers);
  }
}

function min(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return Math.min(...numbers);
  }
}

module.exports = { max, min };
