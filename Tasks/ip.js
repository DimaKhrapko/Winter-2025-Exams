// Refactor following solution
// Split string by the first occurrence of separator
'use strict';

const parseIp = (ip) => {
  const result = [];
  if (ip === '') return;
  const array = ip.split('.');
  if (array.length != 4) return;
  let j = 0;
  for (const element of array) {
    result[j] = parseInt(element);
    if (isNaN(result[j])) return;
    j++;
  }
  return result;
};

module.exports = parseIp;
