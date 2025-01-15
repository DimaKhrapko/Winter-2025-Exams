// Refactor following solution
// Increment all numbers in dictionary
'use strict';

const incNumbers = (object, ...rest_variables) => {
  for (const element in object) {
    if ((typeof object[element]).charAt(0).toUpperCase() === 'N') {
      object[element] = object[element] + 1;
    }
  }
  return object;
};

module.exports = incNumbers;
