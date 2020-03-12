const removeDuplicates = require("../katas/remove-duplicates");
const { expect } = require("chai");

describe("removeDuplicates", () => {
  it("returns an empty array if passed an empty array", () => {
    const items = [];
    const actualResults = removeDuplicates(items);
    expect(actualResults).to.eql([]);
  });
  it("returns a new array with the duplicate items removed", () => {
    const items = [1, 1, 2, 3, 3, 4];
    const actualResults = removeDuplicates(items);
    expect(actualResults).to.eql([1, 2, 3, 4]);
  });
});
