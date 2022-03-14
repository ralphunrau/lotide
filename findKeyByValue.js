const findKeyByValue = function(object, value) {
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
module.exports = findKeyByValue;