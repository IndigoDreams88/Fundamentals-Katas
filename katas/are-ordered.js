/*
  the areOrdered function should take an array of numbers as an input.
  It should return true if all the numbers are in ascending order and false if they are not.
  An empty array should return false.
*/

function areOrdered(nums) {
  if (nums.length === 0) {
    return false;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] >= nums[i]) {
      return false;
    }
    return true;
  }
}

/*
function areOrdered(nums){
  if (nums.length === 0){
    return false;
  }
  let sorted = nums.concat().sort((a,b) => 
    a-b);
    let isSorted = true;
    for (let i in sorted)
    if (sorted[i] !== nums[i] && isSorted) isSorted = false;
    return isSorted;
}
*/

module.exports = areOrdered;
