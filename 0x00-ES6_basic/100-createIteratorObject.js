export default function createIteratorObject(report) {
  const employeesList = [];
  /* eslint-disable no-unused-vars */
  for (const [department, employees] of Object.entries(report.allEmployees)) {
    for (const employee of employees) {
      employeesList.push(employee);
    }
  }
  /* eslint-enable no-unused-vars */

  return employeesList;
}
