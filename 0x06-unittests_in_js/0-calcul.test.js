const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Checking if a number is round', () => {
    assert.equal(calculateNumber(5, 7), 12);
  });

  it('Checking rounding of the second value', () => {
    assert.equal(calculateNumber(1, 6.8), 8);
  });

  it('Checking rounding of the first value', () => {
    assert.equal(calculateNumber(6.7, 2), 9);
  });

  it('Checking rounding of both values', () => {
    assert.equal(calculateNumber(2.5, 2.1), 5);
  });

  it('Checking rounding of negative numbers', () => {
    assert.equal(calculateNumber(-4.6, -1.2), -6);
  });
});
