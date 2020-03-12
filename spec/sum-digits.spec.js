const sumDigits = require("../katas/sum-digits");
const { expect } = require("chai");

describe("sumDigits", () => {
  it("returns a single digit number if passed a single digit number", () => {
    const number = 1;
    const actualResult = sumDigits(number);
    expect(actualResult).to.eql(1);
  });
  it("returns the sum of a two digit integer", () => {
    const number = 99;
    const actualResult = sumDigits(number);
    expect(actualResult).to.eql(18);
  });
  it("returns the sum of a decimal number", () => {
    const number = 10.5;
    const actualResult = sumDigits(number);
    expect(actualResult).to.eql(6);
  });
});
