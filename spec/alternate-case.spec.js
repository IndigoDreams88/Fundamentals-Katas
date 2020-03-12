const alternateCase = require("../katas/alternate-case");
const { expect } = require("chai");

describe("alternateCase", () => {
  it("returns an empty string, when passed an empty string", () => {
    const input = "";
    const actualResults = alternateCase(input);
    const expectedResults = "";
    expect(actualResults).to.eql(expectedResults);
  });
  it("returns a single letter as a capital letter", () => {
    const input = "a";
    const actualResults = alternateCase(input);
    const expectedResults = "A";
    expect(actualResults).to.eql(expectedResults);
  });
  it("returns alternating capital and lowercase letters when passed two or more letters", () => {
    const input = "hello";
    const actualResults = alternateCase(input);
    const expectedResults = "HeLlO";
    expect(actualResults).to.eql(expectedResults);
  });
  it("returns alternating capital and lowercase letters when passed two or more letters accounting for any spaces", () => {
    const input = "hello world";
    const input2 = "hi my name is bob";
    const actualResults = alternateCase(input);
    const actualResults2 = alternateCase(input2);
    const expectedResults = "HeLlO wOrLd";
    const expectedResults2 = "Hi My NaMe Is BoB";
    expect(actualResults).to.eql(expectedResults);
    expect(actualResults2).to.eql(expectedResults2);
  });
});
