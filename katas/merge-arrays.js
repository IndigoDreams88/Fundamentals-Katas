/*
  The function mergeArrays should take 2 arrays and merges them into one array, taking one item from each array at a time.
  If the arrays are of uneven length, then simply continue adding elements from the longest array onto the end of the merged array.
  E.g. [1, 2, 3] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c']
  [1, 2, 3, 4, 5] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c', 4, 5]
*/

function mergeArrays(numbers, letters) {
  if (numbers.length === 0 && letters.length === 0) {
    return [];
  }
  const mergedArrays = [];
  const l = Math.min(numbers.length, letters.length);
  /* alternates the items in arrays of even length*/
  for (let i = 0; i < l; i++) {
    mergedArrays.push(numbers[i], letters[i]);
  }

  /* slices off any remaining characters from the longest array (if there is one) and adds them onto the end of the merged characters in the new array.*/
  mergedArrays.push(...numbers.slice(l), ...letters.slice(l));

  return mergedArrays;
}

module.exports = mergeArrays;
