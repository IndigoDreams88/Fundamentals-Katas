const getCentury = require("../katas/get-century");
const { expect } = require("chai");

describe("getCentury", () => {
  it("returns 0 if no given year", () => {
    const actualResult = getCentury();
    expect(actualResult).to.eql("0");
  });
  it("returns the corresponding century when given a year", () => {
    const year = 1999;
    const year2 = 1789;
    const actualResult = getCentury(year);
    const actualResult2 = getCentury(year2);
    expect(actualResult).to.eql("20th");
    expect(actualResult2).to.eql("18th");
  });
  it("handles centuries ending in 1st, 2nd and 3rd", () => {
    const year = 2002;
    const year2 = 2132;
    const year3 = 763;
    const actualResult = getCentury(year);
    const actualResult2 = getCentury(year2);
    const actualResult3 = getCentury(year3);
    expect(actualResult).to.eql("21st");
    expect(actualResult2).to.eql("22nd");
    expect(actualResult3).to.eql("8th");
  });
});
