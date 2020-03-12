const countVeg = require("../katas/veg-counter");
const { expect } = require("chai");

describe("countVeg", () => {
  it("returns a count of 0 if passed an empty array", () => {
    const vegArray = [];
    const vegType = "root";
    const actualResult = countVeg(vegArray, vegType);
    expect(actualResult).to.eql(0);
  });
  it("returns the total count of different types of vegetable", () => {
    const vegArray = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    ];
    const vegType = "root";
    const actualResult = countVeg(vegArray, vegType);
    expect(actualResult).to.eql(9);
  });
});
