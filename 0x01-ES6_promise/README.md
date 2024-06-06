# ES6 Promises

## Task 0: Keep every promise you make and only make promises you can keep

Returns a Promise using the prototype **function getResponseFromAPI()**

## Task 1: Don't make a promise...if you know you can't keep it

Returns a boolean promise object using **getFullResponseFromAPI(success)**

## Task 2: Catch me if you can

Using the fucntion **handleResponseFromAPI(promise)** to append three handlers to the funciton.

## Task 3: Handle multiple successful promise

A function that resolves all promises and log body firstName lastName to the console

## Task 4: Simple promise

Using the following prototype

```javascript
function signUpUser(firstName, lastName) {
}
That returns a resolved promise with this object:

{
  firstName: value,
  lastName: value,
}
```

## Task 5: Reject the promises

Write and export a function named uploadPhoto. It should accept one argument fileName (string).

The function should return a Promise rejecting with an Error and the string $fileName cannot be processed

```javascript
export default function uploadPhoto(filename) {}
```
