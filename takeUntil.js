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

module.exports = takeUntil;