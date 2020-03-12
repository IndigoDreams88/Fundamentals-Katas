const middleChar = require("../katas/middle-char");
const { expect } = require("chai");

describe("middleChar", () => {
  it("returns an empty string if passed an empty string", () => {
    const str = "";
    const actualResult = middleChar(str);
    expect(actualResult).to.eql("");
  });
  it("returns the middle character if the string is of an uneven length", () => {
    const str = "hello";
    const actualResult = middleChar(str);
    expect(actualResult).to.eql("l");
  });
  it("returns the middle two characters if the string is of an even length", () => {
    const str = "banana";
    const actualResult = middleChar(str);
    expect(actualResult).to.eql("na");
  });
});
