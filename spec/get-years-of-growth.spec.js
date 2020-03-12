const getYearsOfGrowth = require("../katas/get-years-of-growth");
const { expect } = require("chai");

describe("getYearsOfGrowth", () => {
  it("returns a number", () => {
    const startPopulation = 1000;
    const endPopulation = 2000;
    const growthPercentage = 2;
    const netMigration = 12;
    const actualResult = getYearsOfGrowth(
      startPopulation,
      endPopulation,
      growthPercentage,
      netMigration
    );
    expect(actualResult).to.be.a("number");
  });

  it("returns the number of years it takes until the end population total is reached", () => {
    const startPopulation = 1000;
    const endPopulation = 2000;
    const growthPercentage = 2;
    const netMigration = 12;
    const actualResult = getYearsOfGrowth(
      startPopulation,
      endPopulation,
      growthPercentage,
      netMigration
    );
    expect(actualResult).to.eql(25);
  });
});
