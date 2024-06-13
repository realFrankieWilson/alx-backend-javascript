// A Teacher Directory

interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployment: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Creating the Teacher Object
const teacher1: Teacher = {
  firstName: "Wisdom",
  lastName: "Mark",
  fullTimeEmployment: true,
  yearsOfExperience: 5,
  location: "India",
  contract: true,
};


// A Director interface that extends Teach
// Requires numberOfReports(number) attribute.

interface Director extends Teacher {
  numberOfReports: number;
}

// Creating the director object

const director: Director = {
  firstName: "Faustina",
  lastName: "Joseph",
  fullTimeEmployment: true,
  yearsOfExperience: 15,
  location: "Mexico",
  numberOfReports: 2
};

// A function interface that takes two string as parameters.
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// A function definition that conforms to printTeacherFunction interface.
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};


// A class of Student.
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return this.firstName;
  }

  displayName(): string {
    return this.firstName;
  }
}

const studentInstance: StudentClass = new Student("Mathew", "Doe");

console.log(studentInstance.workOnHomework());
console.log(studentInstance.displayName());



// Calls the printTeacherFunction with some string arguments
// console.log(printTeacher("John", "Doe"));

// console.log(teacher1);
// console.log(director);
