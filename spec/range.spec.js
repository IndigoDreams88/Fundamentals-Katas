const range = require("../katas/range");
const { expect } = require("chai");

describe("range", () => {
  it("returns an array of numbers from 0 with the length specified, if passed a length value", () => {
    const length = 5;
    const start = 0;
    const step = 0;
    const actualResult = range(length, start, step);
    expect(actualResult).to.eql([0, 1, 2, 3, 4]);
  });
  it("returns an array of numbers with the length specified, starting from the start value, if passed a length and a start value", () => {
    const length = 5;
    const start = 2;
    const step = 0;
    const actualResult = range(length, start, step);
    expect(actualResult).to.eql([2, 3, 4, 5, 6]);
  });
  it("returns an array of numbers with the length specified, starting from the start value and increasing by the step, if passed a length, a start value and a step", () => {
    const length = 5;
    const start = 2;
    const step = 2;
    const actualResult = range(length, start, step);
    expect(actualResult).to.eql([2, 4, 6, 8, 10]);
  });
});
