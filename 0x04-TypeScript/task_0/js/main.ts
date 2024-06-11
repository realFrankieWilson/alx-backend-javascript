interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const frankie: Student = {
  firstName: "Frank",
  lastName: "Ugwu",
  age: 25,
  location: "Nigeria"
}

const wilson: Student = {
  firstName: "Williams",
  lastName: "Ugwu",
  age: 23,
  location: "USA"
}

const studentList: Student[] = [frankie, wilson];


function createTable() {
  const table = document.createElement("table");
  const tableBody = document.createElement("tbody");

  studentList.forEach((student) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    nameCell.textContent = `${student.firstName}`;
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

createTable();
