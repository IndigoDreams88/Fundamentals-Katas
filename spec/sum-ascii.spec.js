const sumAscii = require("../katas/sum-ascii");
const { expect } = require("chai");

describe("sumAscii", () => {
  it("returns a score of 0 if passed an empty array", () => {
    const namesArray = [];
    const actualResult = sumAscii(namesArray);
    expect(actualResult).to.eql(0);
  });
  it("returns a score as a number, when passed a single name in an array", () => {
    const namesArray = ["tom"];
    const actualResult = sumAscii(namesArray);
    expect(actualResult).to.eql(336);
  });
  it("returns the highest score as a number, when passed an array of names", () => {
    const namesArray = ["tom", "john"];
    const actualResult = sumAscii(namesArray);
    expect(actualResult).to.eql(431);
  });
});
