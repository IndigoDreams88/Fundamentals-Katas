const getFrequencies = require("../katas/get-frequencies");
const { expect } = require("chai");

describe("getFrequencies", () => {
  it("returns an object", () => {
    const str = "";
    const actualResult = getFrequencies(str);
    expect(actualResult).to.eql({});
  });
  it("returns an object containing a key value pair of the single letter and its tally", () => {
    const str = "a";
    const actualResult = getFrequencies(str);
    expect(actualResult).to.eql({ a: 1 });
  });
  it("returns an object containing key value pairs of each different letter in the string and its tally", () => {
    const str = "hi";
    const actualResult = getFrequencies(str);
    expect(actualResult).to.eql({ h: 1, i: 1 });
  });
  it("returns an object containing key value pairs of each different letter in the string and its tally including for duplicate letters", () => {
    const str = "bananas";
    const actualResult = getFrequencies(str);
    expect(actualResult).to.eql({
      b: 1,
      a: 3,
      n: 2,
      s: 1
    });
  });
});
