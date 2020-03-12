const caesarCipher = require("../katas/caesar-cipher");
const { expect } = require("chai");

describe("caesarCipher", () => {
  it("returns an empty string when passed an empty string", () => {
    const str = "";
    const num = 2;
    const actualResults = caesarCipher(str, num);
    const expectedResults = "";
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns a string with the letters replaced by the number of shifts up the alphabet", () => {
    const str = "hi";
    const num = 2;
    const actualResults = caesarCipher(str, num);
    const expectedResults = "jk";
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns a string with the letters replaced by the number of shifts down the alphabet", () => {
    const str = "bog";
    const num = -3;
    const actualResults = caesarCipher(str, num);
    const expectedResults = "yld";
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns a string with the letters replaced by the number of shifts up or down the alphabet accounting for spaces", () => {
    const str = "the dog was called jim";
    const num = 4;
    const actualResults = caesarCipher(str, num);
    const expectedResults = "xli hsk aew geppih nmq";
    expect(actualResults).to.equal(expectedResults);
  });
});
