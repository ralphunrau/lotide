const assertEqual = require('./assertEqual')

const tail = function(arr) {
  let taily = arr.slice(1);
  return taily;
};

module.exports = tail;