// Refactor following solution
// Get month number
'use strict';

const months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const getMonth = (monthString) => {
  const lowerCaseMonth = monthString.toLowerCase();

  const index = months.findIndex((month) => lowerCaseMonth.startsWith(month));

  return index + 1 || -1;
};

module.exports = getMonth;
