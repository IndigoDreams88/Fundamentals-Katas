/*
  The function checkStudents should take a list of students and a cohort and return true if all students are in the given cohort and false if any students are not in the given cohort.
  E.g. checkStudents([
    {name: 'Ben', cohort: 'October'},
    {name: 'Amanda', cohort: 'April'},
    {name: 'Matt', cohort: 'April'}
  ], 'April')
  --> false
*/

function checkStudents(students, cohort) {
  if (students.length === 0) {
    return false;
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].cohort !== cohort) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = checkStudents;
