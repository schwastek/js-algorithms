import countingSort from '../counting-sort/countingSort';
import {
  compareNumbers,
  generateArrayIntegers,
} from '../utilities';

const { expect } = require('chai');

describe('Counting sort', () => {
  describe('countingSort()', () => {
    it('Sorts the array using counting sort', () => {
      const array = generateArrayIntegers(100, 0, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(countingSort(array));
    });
  });
});
