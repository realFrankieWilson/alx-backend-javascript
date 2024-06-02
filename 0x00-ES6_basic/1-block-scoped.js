export default function taskBlock(trueOrFalse) {
  const task = false;
  let task2 = true;

  if (trueOrFalse) {
    task2 = true;
  }

  return [task, task2];
}
