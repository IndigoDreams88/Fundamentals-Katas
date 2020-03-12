const getDistinctLetters = require("../katas/get-distinct-letters");
const { expect } = require("chai");

describe("getDistinctLetters", () => {
  it("returns a string", () => {
    const str1 = "";
    const str2 = "";
    const actualResults = getDistinctLetters(str1, str2);
    const expectedResults = "";
    expect(actualResults).to.eql(expectedResults);
  });
  it("returns a string of letters that are not present in the other string with two separate words", () => {
    const str1 = "hello";
    const str2 = "world";
    const actualResults = getDistinctLetters(str1, str2);
    const expectedResults = "dehrw";
    expect(actualResults).to.eql(expectedResults);
  });
  it("returns a string of letters that are not present in the other string with multiple words", () => {
    const str1 = "tomatoes, peaches";
    const str2 = "potatoes, oranges";
    const actualResults = getDistinctLetters(str1, str2);
    const expectedResults = "cghmnr";
    expect(actualResults).to.eql(expectedResults);
  });
  it("returns a string of letters that are not present in the other string with multiple words including punctuation", () => {
    const str1 = "tomatoes, !peaches";
    const str2 = "potatoes, oranges.";
    const actualResults = getDistinctLetters(str1, str2);
    const expectedResults = "!.cghmnr";
    expect(actualResults).to.eql(expectedResults);
  });
});
