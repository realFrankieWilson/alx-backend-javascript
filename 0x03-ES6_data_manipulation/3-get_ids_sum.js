/**
 * A function that returns the sum oa ll the student's ids.
 * @param {Array<Object>} arrayObj - The array of student objects.
 *
 * @returns {number} - The sum of all the student's ids.
*/

export default function getStudentIdSum(arrayObj) {
  if (Array.isArray(arrayObj)) {
    return arrayObj.reduce((sum, student) => sum + student.id, 0);
  }

  return 0;
}
