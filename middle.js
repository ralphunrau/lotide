const assertArraysEqual = require('./assertArraysEqual')

const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else if (arr.length % 2 === 1) {
    return arr.slice(arr.length / 2, arr.length / 2 + 1);
  } else if (arr.length % 2 === 0) {
    return arr.slice(arr.length / 2 - 1, arr.length / 2 + 1);
  }
};

module.exports = middle;