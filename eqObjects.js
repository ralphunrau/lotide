const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}!`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}!`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let x = 0; x < arr1.length; x++) {
    if (arr1[x] !== arr2[x]) {
      return false;
    }
  }
  return true;
}

const eqObjects = function(object1, object2) {
  let obj1keys = Object.keys(object1);
  let obj2keys = Object.keys(object2);
  if (obj1keys.length !== obj2keys.length) {
    return false;
  }
  for (let elem of obj1keys) {
    if (Array.isArray(object1[elem]) && Array.isArray(object2[elem])) {
      if (!eqArrays(object1[elem], object2[elem])) {
        return false;
      }
    }
    else if (object1[elem] !== object2[elem]) {
      return false;
    } 
  }
  return true;
}

