// The Director interface.
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// The Teacher interface.
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}


// The Teacher interface implementation
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

type EmployeeCreator = (salary: number | string) => Director | Teacher;

const createEmployee: EmployeeCreator = (salary) => {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
};

// USAGE
// const employee1 = createEmployee(300);
// console.log(employee1.workFromHome());
// console.log(employee1.getCoffeeBreak());


// The isDirector function
function isDirector(employee: any): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Creating the employee object
// const employee1 = createEmployee(300);
// const employee2 = createEmployee(800);

// executeWork(employee1);
// executeWork(employee2);

// The subject string literal type of teachClass
type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }

  return "Teaching History";
}

// Usage
const todayClass1: Subjects = "Math";
const todayClass2: Subjects = "History";

console.log(teachClass(todayClass1));
console.log(teachClass(todayClass2));


