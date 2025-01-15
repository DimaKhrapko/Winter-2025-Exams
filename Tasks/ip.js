// Refactor following solution
// Split string by the first occurrence of separator
'use strict';

const parseIp = (ip) => {
  if (ip === '') return;

  const array = ip.split('.');
  const IP_ADRESS_LENGTH = 4;

  if (array.length !== IP_ADRESS_LENGTH) return;

  const result = [];

  for (const element of array) {
    const num = parseInt(element);
    if (isNaN(num)) return;

    result.push(num);
  }

  return result;
};

module.exports = parseIp;
