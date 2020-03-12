const sumArgs = require("../katas/sum-args");
const { expect } = require("chai");

describe("sumArgs", () => {
  it("returns 0 if it is not passed any arguments", () => {
    const actualResults = sumArgs();
    expect(actualResults).to.eql(0);
  });
  it("returns the argument if only passed 1 arguement", () => {
    const num1 = 1;
    const actualResults = sumArgs(num1);
    expect(actualResults).to.eql(1);
  });
  it("returns the sum of all the arguments", () => {
    const num1 = 1;
    const num2 = 2;
    const num3 = 3;
    const actualResults = sumArgs(num1, num2, num3);
    expect(actualResults).to.eql(6);
  });
});
