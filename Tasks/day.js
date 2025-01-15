// Refactor following solution
// Get day number
'use strict';

const DAYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const parseDay = (day) => {
  let i;
  for (i = 0; i < DAYS.length; i++) {
    if (day.startsWith(DAYS[i])) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
