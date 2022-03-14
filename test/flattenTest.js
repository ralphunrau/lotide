const assert = require('chai').assert;
const flatten = require('../flatten')

describe('flatten', () => {
  it('returns "p4ssw0rd" for "password"', () => {
    assert.strictEqual(flatten('password'), 'p4ssw0rd');
  });

  it("returns 'h3110' for 'hello'", () => {
    assert.strictEqual(flatten('hello'), 'h3110');
  });
});