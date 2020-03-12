const lengthenDate = require("../katas/lengthen-date");
const { expect } = require("chai");

describe("lengthenDate", () => {
  it("returns an empty string if passed an empty string", () => {
    const date = "";
    const actualResult = lengthenDate(date);
    expect(actualResult).to.eql("");
  });

  it("returns the date with the relevant ordinal suffix of either 'st', 'nd', 'rd', or 'th'", () => {
    const date = "22.04.2018";
    const actualResult = lengthenDate(date);
    expect(actualResult).to.include("22nd");
  });
  it("returns the date with the month number converted to the month name", () => {
    const date = "03.10.2000";
    const actualResult = lengthenDate(date);
    expect(actualResult).to.include("October");
  });
  it("returns the date with the day of the week", () => {
    const date = "12.05.1995";
    const actualResult = lengthenDate(date);
    expect(actualResult).to.include("Friday");
  });
  it("returns a string with the full lengthened date including the day of the week and the year", () => {
    const date = "21.03.2017";
    const actualResult = lengthenDate(date);
    expect(actualResult).to.eql("Tuesday 21st March 2017");
  });
});
