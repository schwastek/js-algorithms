import shellSort from '../shell-sort/shellSort';
import {
  compareNumbers,
  generateArrayIntegers,
} from '../utilities';

const { expect } = require('chai');

describe('Shell sort', () => {
  describe('shellSort()', () => {
    it('Sorts the array using shell sort', () => {
      const array = generateArrayIntegers(100, -1000, 1000);
      const sorted = [...array].sort(compareNumbers);

      expect(sorted).to.deep.equal(shellSort(array));
    });
  });
});
