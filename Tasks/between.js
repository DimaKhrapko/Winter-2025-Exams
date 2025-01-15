// Refactor following solution
// Extract substring between prefix and suffix
'use strict';

const getValueBetween = (str, prefix, suffix) => {
  const prefixIndex = str.indexOf(prefix);

  if (prefixIndex === -1) return '';

  const suffixIndex = str.indexOf(suffix);
  const lastSubstringIndex = suffixIndex !== -1 ? suffixIndex : str.length;

  return str.substring(prefixIndex + 1, lastSubstringIndex);
};

module.exports = getValueBetween;
