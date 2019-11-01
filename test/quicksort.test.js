import quicksortBasic from '../quicksort/quicksortBasic';
const { expect } = require('chai');

describe('Quicksort', () => {
  describe('quicksortBasic([3, 7, 8, 5, 2, 1, 9, 5, 4])', () => {
    it('Sorts the numbers from least to greatest', () => {
      const result = quicksortBasic([3, 7, 8, 5, 2, 1, 9, 5, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 5, 7, 8, 9]);
    });
  });
});