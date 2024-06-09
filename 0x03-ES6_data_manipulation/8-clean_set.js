/**
 * A function that returns only values that start with a specific string.
 * @param {function} set - Uses set function to performs the logic
 * @param {String} startString - String to seach for.
 * @returns {String} a specific string from param.
 */
export default function cleanSet(set, startString) {
  const tempString = [];
  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((str_) => {
    if (typeof str_ === 'string' && str_.startsWith(startString)) {
      tempString.push(str_.slice(startString.length));
    }
  });
  return tempString.join('-');
}
