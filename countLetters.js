const countLetters = function (string) {
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

module.exports = countLetters;