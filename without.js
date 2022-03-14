const without = function(source, itemsToRemove) {
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

module.exports = without;