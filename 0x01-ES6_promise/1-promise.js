export default function getFullResponseFromAPI(arg) {
  return new Promise((resolve, reject) => {
    if (arg === true) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
