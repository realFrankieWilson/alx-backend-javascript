/// <reference path="crud.js" />

// Imports dependecies.
import { RowID, RowElement, } from './interface';
import * as CRUD from './crud';

// Creating an object of row.
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowID: RowID = CRUD.insertRow(row);
console.log('New row ID:', newRowID);

const updatedRow: RowElement = {
  ...row,
  age: 23
};

const updatedRowID = CRUD.updateRow(newRowID, updatedRow);
console.log('Updated row ID:', updatedRowID);

CRUD.deleteRow(updatedRowID);
