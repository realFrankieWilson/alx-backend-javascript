export default function iterateThroughObject(reportWithIterator) {
  let employees = '';

  for (const [x, value] of reportWithIterator.entries()) {
    if (x !== reportWithIterator.lenght - 1) {
      employees += `${value} | `;
    } else {
      employees += value;
    }
  }

  return employees;
}
