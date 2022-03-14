const assert = require('chai').assert;
const tail = require('../tail')

describe ('tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"])
  });

  it('returns [4,5,6,7] for [3,4,5,6,7]', () => {
    assert.deepEqual(tail([3, 4, 5, 6, 7]), [4, 5, 6, 7])
  });
});
