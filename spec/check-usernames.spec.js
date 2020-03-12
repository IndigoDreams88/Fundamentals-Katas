const checkUsernames = require("../katas/check-usernames");
const { expect } = require("chai");

describe("checkUsernames", () => {
  it("returns false if passed an empty array", () => {
    const usernames = [];
    const actualResults = checkUsernames(usernames);
    const expectedResults = false;
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns true if the username is valid", () => {
    const usernames = ["jimmy_123"];
    const actualResults = checkUsernames(usernames);
    const expectedResults = true;
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns false if the username is not valid", () => {
    const usernames = ["jimmy_1234ergertert674rt45_67hdf"];
    const actualResults = checkUsernames(usernames);
    const expectedResults = false;
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns true if all the usernames are valid", () => {
    const usernames = ["jimmy_123f", "billy1981_yay", "chancay1985_hello"];
    const actualResults = checkUsernames(usernames);
    const expectedResults = true;
    expect(actualResults).to.equal(expectedResults);
  });
  it("returns false if all the usernames are invalid", () => {
    const usernames = [
      "jimmy_123fjhhhhhhhhhhhhhhhhhhh",
      "billy1981...................djfksksdjyay",
      "chancay1985_hello"
    ];
    const actualResults = checkUsernames(usernames);
    const expectedResults = false;
    expect(actualResults).to.equal(expectedResults);
  });
});
