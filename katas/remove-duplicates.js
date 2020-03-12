/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/

function removeDuplicates(items) {
  const noDuplicates = items.filter((item, pos) => {
    return items.indexOf(item) === pos;
  });
  return noDuplicates;
}

/*
Iterate over the array and for each element, check if the first position of this element in the array is equal to the current position. These two positions are different for duplicate elements.
*/

module.exports = removeDuplicates;
