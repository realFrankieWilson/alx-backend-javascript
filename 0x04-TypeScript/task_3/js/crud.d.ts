/// <reference path="interface.ts" />

import { RowID } from "./interface";

// An ambient file containing the type declarations for each crude
// function.
declare global {
  namespace CRUD {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(RowID: RowID): void;
    export function updateRow(rowId: RowID, row: RowElement): RowID;
  }
}
export function insertRow(row: RowElement): number {
  throw new Error('Function not implemented.');
}

export function updateRow(newRowID: number, updatedRow: RowElement) {
  throw new Error('Function not implemented.');
}

export function deleteRow(updatedRowID: any) {
  throw new Error('Function not implemented.');
}

