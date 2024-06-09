/**
 * A function that filters student's list based on student's location.
 * @param {Array<object>} arrayObj - The array of lists containing students.
 * @param {string} city - The location of the student.
 *
 * @returns {Array<string>} - An array of objects of students who are
 * located in a specific city.
*/

export default function getStudentsByLocation(arrayObj, city) {
  if (Array.isArray(arrayObj)) {
    return arrayObj.filter((obj) => obj.location === city);
  }

  return [];
}
