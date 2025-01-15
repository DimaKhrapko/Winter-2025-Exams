// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, prefix, suffix) => {
  let i = str.indexOf(prefix);
  if (i === -1) return '';
  const k = i + prefix.length;
  str = str.substring(k);
  if (suffix) {
    i = str.indexOf(suffix);
    if (i === -1) return '';
    str = str.substring(0, i);
    }
  return str;
};

module.exports = getValueBetween;
