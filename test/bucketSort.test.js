import bucketSort from '../bucket-sort/bucketSort';
import {
  compareNumbers,
  generateArrayIntegers,
} from '../utilities';

const { expect } = require('chai');

describe('Bucket sort', () => {
  describe('bucketSort()', () => {
    it('Sorts the array using bucket sort', () => {
      const array = generateArrayIntegers(100, 0, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(bucketSort(array));
    });
  });
});
