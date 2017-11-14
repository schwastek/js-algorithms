import radixSort from '../radix-sort/radixSort';
import {
  compareNumbers,
  generateArrayIntegers,
} from '../utilities';

const { expect } = require('chai');

describe('Radix sort', () => {
  describe('radixSort()', () => {
    it('Sorts the array using LSD radix sort', () => {
      const array = generateArrayIntegers(100, 0, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(radixSort(array));
    });
  });
});
