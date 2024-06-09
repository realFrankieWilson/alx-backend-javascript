/**
 * A function that returns an array of students for a specific city
 * with new grade.
 * @param {Array<Object>} arrayObj - The lists of students.
 * @param {string} city - student's location.
 * @param {String} newGrades - Array of grade objects.
 * @returns {Array<Object>} - Array of students with thier new grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.location === city).map((student) => {
      const updatedStudent = { ...student };
      const matchGrade = newGrades.find((grade) => grade.studentId === student.id);
      updatedStudent.grade = matchGrade ? matchGrade.grade : 'N/A';
      return updatedStudent;
    });
  }
  return [];
}
