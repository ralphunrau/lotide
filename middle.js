function eqArrays(arr1, arr2) {
  let longerArray = arr1;
  if (arr2.length > arr1.length) {
    longerArray = arr2;
  }
  for (let x = 0; x < longerArray.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
};

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}!`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}!`);
  }
};

function middle(arr) {
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 1) {
    return arr.slice(arr.length / 2, arr.length / 2 + 1);
  } else if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
};

console.log(assertArraysEqual(middle([3,4,5,6]),[4,5]));