/*
  The function getcenturyString should take a year as a number and return the centuryString.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' centuryString)
*/

function getCenturyString(year) {
  let centuryString = 0;
  let stringEnding = "";
  if (!year) {
    return "0";
  } else {
    let newYear = year.toString().split("");
    for (let i = 0; i < newYear.length; i++) {
      if (newYear.length < 4) {
        centuryString = newYear[0];
        centuryString++;
      } else {
        centuryString = newYear[0] + newYear[1];
        centuryString++;
      }

      if (newYear[1] === "0") {
        stringEnding = "st";
      } else if (newYear[1] === "1") {
        stringEnding = "nd";
      } else if (newYear[1] === "2") {
        stringEnding = "rd";
      } else {
        stringEnding = "th";
      }
    }
  }
  return centuryString + stringEnding;
}

module.exports = getCenturyString;
