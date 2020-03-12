const areOrdered = require("../katas/are-ordered");
const { expect } = require("chai");

describe("areOrdered", () => {
  it("returns a boolean", () => {
    const nums = [];
    const actualResults = areOrdered(nums);
    const expectedResults = false;
    expect(actualResults).to.equal(expectedResults);
  });

  it("returns false if passed an empty array", () => {
    const nums = [];
    const actualResults = areOrdered(nums);
    const expectedResults = false;
    expect(actualResults).to.equal(expectedResults);
  });

  it("returns true if the numbers array is in ascending order", () => {
    const nums = [1, 2, 3];
    const actualResults = areOrdered(nums);
    const expectedResults = true;
    expect(actualResults).to.equal(expectedResults);
  });

  it("returns false if the numbers array is not in ascending order", () => {
    const nums = [3, 1, 0, 2];
    const actualResults = areOrdered(nums);
    const expectedResults = false;
    expect(actualResults).to.equal(expectedResults);
  });
});
