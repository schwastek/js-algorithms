import { expect } from 'chai';
import bubbleSort from '../bubble-sort/bubbleSort';
import bubbleSortAlternative from '../bubble-sort/bubbleSortAlternative';
import {
  compareNumbers,
  generateArrayIntegers,
} from '../utilities';

describe('Bubble sort', () => {
  describe('bubbleSort(array)', () => {
    it('Sorts the array using bubble sort', () => {
      const array = generateArrayIntegers(100, -1000, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(bubbleSort(array));
    });
  });
  describe('bubbleSortAlternative(array)', () => {
    it('Sorts the array using bubble sort', () => {
      const array = generateArrayIntegers(100, -1000, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(bubbleSortAlternative(array));
    });
  });
});
