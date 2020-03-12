const checkStudents = require("../katas/check-students");
const { expect } = require("chai");

describe("checkStudents", () => {
  it("returns false when the array is empty", () => {
    const students = [];
    const actualResults = checkStudents(students);
    expect(actualResults).to.be.false;
  });
  it("returns true if the student is in the given cohort", () => {
    const students = [{ name: "Ben", cohort: "October" }];
    const cohort = "October";
    const actualResults = checkStudents(students, cohort);
    expect(actualResults).to.be.true;
  });
  it("returns true if all students are in the given cohort", () => {
    const students = [
      { name: "Ben", cohort: "April" },
      { name: "Amanda", cohort: "April" },
      { name: "Matt", cohort: "April" }
    ];
    const cohort = "April";
    const actualResults = checkStudents(students, cohort);
    expect(actualResults).to.be.true;
  });
  it("returns false if all students are not in the given cohort", () => {
    const students = [
      { name: "Ben", cohort: "October" },
      { name: "Amanda", cohort: "April" },
      { name: "Matt", cohort: "April" }
    ];
    const cohort = "April";
    const actualResults = checkStudents(students, cohort);
    expect(actualResults).to.be.false;
  });
});
