const middle = require('../middle');
const assert = require('chai').assert;

describe ('middle', () => {
  it('returns [3,4] for [2,3,4,5]', () => {
    assert.deepEqual(middle([2,3,4,5]), [3,4])
  });

  it('returns ["hi"] for ["hello", "hi", "heelo"]', () => {
    assert.deepEqual(middle(["hello", "hi", "heelo"]), ["hi"])
  });
});