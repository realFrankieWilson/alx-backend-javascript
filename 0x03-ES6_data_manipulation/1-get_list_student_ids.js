// A function that returns an array of ids from a list of object.

export default function getListStudentIds(arrayObj) {
  if (Array.isArray(arrayObj)) {
    return arrayObj.map((obj) => obj.id);
  }

  return [];
}
