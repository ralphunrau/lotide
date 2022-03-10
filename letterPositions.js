let letterPositions = function(sentence) {
  const results = {}
  index = 0;
  for (const item of sentence) {
    if (results[item]) {
      results[item].push(index);
    } else if (item === ' '){
    } else {
      results[item] = [index];
    }
    index++;
  }
  return results;
}



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

