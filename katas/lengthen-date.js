/*
  The function lengthenDate should take a date in the format '21.03.2017' and return a string in the format 'TuesdayAsNumber 21st March 2017'
*/

function lengthenDate(date) {
  if (date === "") {
    return "";
  }

  const dateArray = date.split(".");
  let monthNumber = dateArray[0].split("");

  if (monthNumber[1] === "1") {
    monthNumber = monthNumber.join("").concat("st");
  } else if (monthNumber[1] === "2") {
    monthNumber = monthNumber.join("").concat("nd");
  } else if (monthNumber[1] === "3") {
    monthNumber = monthNumber.join("").concat("rd");
  } else {
    monthNumber = monthNumber.join("").concat("th");
  }

  let month = "";
  const months = [
    ["01", "January"],
    ["02", "February"],
    ["03", "March"],
    ["04", "April"],
    ["05", "May"],
    ["06", "June"],
    ["07", "July"],
    ["08", "August"],
    ["09", "September"],
    ["10", "October"],
    ["11", "November"],
    ["12", "December"]
  ];

  for (let i = 0; i < months.length; i++) {
    if (dateArray[1] === months[i][0]) {
      month = months[i][1];
    }
  }

  const strDate = new Date(`${month} ${dateArray[0]}, ${dateArray[2]}`);
  const dayAsNumber = strDate.getDay();

  let day = "";
  const daysArray = [
    [0, "Sunday"],
    [1, "Monday"],
    [2, "Tuesday"],
    [3, "Wednesday"],
    [4, "Thursday"],
    [5, "Friday"],
    [6, "Saturday"]
  ];

  for (let i = 0; i < daysArray.length; i++) {
    if (dayAsNumber == daysArray[i][0]) {
      day = daysArray[i][1];
    }
  }
  const lengthenedDate = `${day} ${monthNumber} ${month} ${dateArray[2]}`;
  return lengthenedDate;
}

module.exports = lengthenDate;
