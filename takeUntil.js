function eqArrays(arr1, arr2) {
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
}

let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}!`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}!`);
  }
};

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let elem of array) {
    if (!callback(elem)) {
      newArray.push(elem)
    } else {
      return newArray
    }
  }
  return newArray
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual([ 1, 2, 5, 7, 2 ],results1)