let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}!`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}!`);
  }
};

let findKeyByValue = function(object, value) {
  let objKeys = Object.keys(object);
  let index = 0;
  for (let key of objKeys) {
    if (object[objKeys[index]] === value) {
      return currentKey;
    } else {
      index++;
      currentKey = objKeys[index];
    }
  }
  return undefined;
}
