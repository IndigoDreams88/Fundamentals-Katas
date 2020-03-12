const mergeArrays = require("../katas/merge-arrays");
const { expect } = require("chai");

describe("mergeArrays", () => {
  it("returns an empty array if passed 2 empty arrays", () => {
    const numbers = [];
    const letters = [];
    const actualResults = mergeArrays(numbers, letters);
    expect(actualResults).to.eql([]);
  });
  it("merges arrays of an even length into one full array", () => {
    const numbers = [1, 2, 3];
    const letters = ["a", "b", "c"];
    const actualResults = mergeArrays(numbers, letters);
    expect(actualResults).to.eql([1, "a", 2, "b", 3, "c"]);
  });
  it("merges arrays of different lengths, appending extra items onto the end of the merged items", () => {
    const numbers = [1, 2, 3];
    const letters = ["a", "b", "c", "d", "e"];
    const actualResults = mergeArrays(numbers, letters);
    expect(actualResults).to.eql([1, "a", 2, "b", 3, "c", "d", "e"]);
  });
});
