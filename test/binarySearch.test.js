const expect = require('chai').expect;
import binarySearch from '../binary-search/binarySearch';
import binarySearchAlternative from '../binary-search/binarySearchAlternative';

describe('Binary Search', function() {
  describe('binarySearch()', function() {
    it('returns true if 6 is found in [1, 2, 3, 4, 5, 6]', function() {
      const result = binarySearch([1, 2, 3, 4, 5, 6], 6); 
      expect(result).to.be.true;
    });
  });

  describe('binarySearch() - alternative', function() {
    it('returns true if 6 is found in [1, 2, 3, 4, 5, 6]', function() {
      const result = binarySearchAlternative([1, 2, 3, 4, 5, 6], 6); 
      expect(result).to.be.true;
    });
  });
});