const letterPositions = function(sentence) {
  const results = {}
  index = 0;
  for (const item of sentence) {
    if (results[item]) {
      results[item].push(index);
    } else if (item === ' '){
    } else {
      results[item] = [index];
    }
    index++;
  }
  return results;
}

module.exports = letterPositions;