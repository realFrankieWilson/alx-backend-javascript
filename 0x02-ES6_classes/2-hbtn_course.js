// Implements a class named HolbertonCourse

export default class HolbertonCourse {
  /**
   * A class that creates the Holberton course
   * @param {string} name - The name of the course.
   * @param {number} length - The lenth of the course.
   * @param {Array<string>} students - The list of students taking the course.
  */

  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Get name.
  get name() {
    return this._name;
  }

  // Sets name
  set name(value) {
    if (typeof (value) !== 'string') {
      throw new Error('Name must be a string.');
    }
    this._name = value;
  }

  // Get course lists.
  get length() {
    return this._length;
  }

  // Sets the length of a particular course.
  set length(value) {
    if (typeof (value) !== 'number') {
      throw new Error('Length must be a number.');
    }
    this._length = value;
  }

  // Gets the list of student in a particular course.
  get students() {
    return this._students;
  }

  // Sets the list of student in the course.
  set students(value) {
    if (!(value instanceof Array)) {
      throw new Error('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
