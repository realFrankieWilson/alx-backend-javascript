export default function createEmployeesObject(departmentName, employess) {
  const emp = {
    [departmentName]: [
      ...employess,
    ],
  };
  return emp;
}
