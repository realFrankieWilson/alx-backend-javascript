export default function guardrail(mathFunction) {
  const temp = [];

  try {
    temp.push(mathFunction());
  } catch (err) {
    temp.push(String(err));
  } finally {
    temp.push('Guardrail was processed');
  }

  return temp;
}
