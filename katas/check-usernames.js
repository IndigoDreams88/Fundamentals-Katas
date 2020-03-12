/*
  The function checkUsernames should take an array of usernames and return true if they are all valid and false if any are not valid.
  A valid username:
  - is at least 5 characters long
  - may contain lowercase letters, numbers and underscores
  - is no longer than 20 characters
*/

function checkUsernames(usernames) {
  const regex = /^[_a-z\d]{5,20}$/;
  if (usernames.length === 0) {
    return false;
  }
  for (let i = 0; i < usernames.length; i++) {
    if (regex.test(usernames[i])) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = checkUsernames;
