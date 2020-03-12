const orderVeg = require("../katas/order-veg");
const { expect } = require("chai");

describe("orderVeg", () => {
  it("returns an empty array if passed an empty array", () => {
    const vegArray = [];
    const actualResult = orderVeg(vegArray);
    expect(actualResult).to.eql([]);
  });
  it("returns a new array of objects, sorted in ascending order by quantity", () => {
    const vegArray = [
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    ];
    const actualResult = orderVeg(vegArray);
    expect(actualResult).to.not.eql(
      { name: "Broccoli", type: "brassica", quantity: 1 },
      { name: "Onion", type: "bulb", quantity: 3 },
      { name: "Chard", type: "leaf", quantity: 3 },
      { name: "Parsnip", type: "root", quantity: 4 },
      { name: "Carrot", type: "root", quantity: 5 },
      { name: "Runner beans", type: "legume", quantity: 8 }
    );
  });
});
