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
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}!`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}!`);
  }
};

function without(source, itemsToRemove) {
  let newArr = [];
  newArr.push(source);
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        newArr.splice(x,1)
      }
    }
  }
  return newArr;
}
