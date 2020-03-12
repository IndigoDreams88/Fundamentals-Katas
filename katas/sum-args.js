/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
  const arguments = [...args];
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  } else {
    return arguments.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }
}

module.exports = sumArgs;
