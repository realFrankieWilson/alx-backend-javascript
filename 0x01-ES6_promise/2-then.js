/**
 * A Promise that resolves, retuning an object with the attribtes:
 * - status: 200
 * - body : 'Success'
 * or rejects with an error if the condition is false.
 * @param {boolean} promise - The boolean argument to determine the result of the promise.
 * @returns {Promise<{ status: number, body: string }|Error>} - A Promise
 * that resolves with an object orrejects with an Error.
 */

export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error());
    }
  })
    .then((resp) => {
      console.log('Got a response from the API');
      return resp;
    })
    .catch(() => {
      console.log('Got a response from the API');
    });
}
