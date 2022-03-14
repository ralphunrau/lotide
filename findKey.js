const findKey = function(object, callback) {
  const objKeys = Object.keys(object);
  for (let key of objKeys) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

module.exports = findKey;