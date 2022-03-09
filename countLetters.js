let assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}!`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}!`);
  }
};

let countLetters = function (string) {
  let countOfLetters = {}

  for (let item of string) {
    if (countOfLetters[item]) {
      countOfLetters[item] += 1;
    } else {
      countOfLetters[item] = 1;
    }
  }
  return countOfLetters;
}

console.log(countLetters('LHLLLFLLLFL'));