/**
 * A function that checks if a particular element exists in an array or not.
 * @param {Array<Object>} arrayObj - The array object to iterate over.
 * @param {function} set - Uses set function to performs the logic
 * @returns {boolean} value.
 */
export default function hasValueFromArray(set, arrayObj) {
  return arrayObj.every((value) => set.has(value));
}
