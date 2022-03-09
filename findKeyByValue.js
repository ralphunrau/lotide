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
  let currentKey = objKeys[index];
  for (let key of objKeys) {
    if (object[currentKey] === value) {
      return currentKey;
    } else {
      index++;
      currentKey = objKeys[index];
    }
  }
  return undefined;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
