import insertionSort from '../insertion-sort/insertionSort';
import {
  compareNumbers,
  generateArrayIntegers,
} from '../utilities';

const { expect } = require('chai');

describe('Insertion Sort', () => {
  describe('insertionSort()', () => {
    it('Sorts the array using insertion sort', () => {
      const array = generateArrayIntegers(100, 0, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(insertionSort(array));
    });
  });
});
