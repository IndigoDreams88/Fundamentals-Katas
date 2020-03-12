const getMostRepeated = require("../katas/get-most-repeated");
const { expect } = require("chai");

describe("getMostRepeated", () => {
  it("returns a character", () => {
    const str = "a";
    const actualResult = getMostRepeated(str);
    expect(actualResult).to.eql("a");
  });
  it("returns the character that is most common, when passed a string containing the same letter", () => {
    const str = "aaa";
    const actualResult = getMostRepeated(str);
    expect(actualResult).to.eql("a");
  });
  it("returns the character that is most common, when passed a string containing mixed, and multiple letters", () => {
    const str = "aaabcdefggggghhii";
    const actualResult = getMostRepeated(str);
    expect(actualResult).to.eql("g");
  });
});
