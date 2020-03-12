const { max, min } = require("../katas/max-and-min");
const { expect } = require("chai");

describe("max", () => {
  it("returns 0 if the array is empty", () => {
    const numbers = [];
    const actualResult = max(numbers);
    expect(actualResult).to.eql(0);
  });
  it("returns the maximum (highest) value in the array ", () => {
    const numbers = [1, 2, 3, 4, 5];
    const actualResult = max(numbers);
    expect(actualResult).to.eql(5);
  });
});

describe("min", () => {
  it("returns 0 if the array is empty", () => {
    const numbers = [];
    const actualResult = min(numbers);
    expect(actualResult).to.eql(0);
  });
  it("returns the minimum (lowest) value in the array ", () => {
    const numbers = [1, 2, 3, 4, 5];
    const actualResult = min(numbers);
    expect(actualResult).to.eql(1);
  });
});
