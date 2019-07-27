/**
 * Binary search is an efficient algorithm for finding an item from a sorted list of items. 
 * It works by repeatedly dividing in half the portion of the list that could contain the item, 
 * until you've narrowed down the possible locations to just one (description from: Khan Academy).
 * 
 * @example
 * const haystack = [1, 2, 3, 4, 5];
 * // returns true
 * binarySearch(haystack, 4);
 * 
 * @param {Array} haystack The sorted array of integers.
 * @param {number} key The item to be found.
 * @returns {boolean} True, if item was found.
 */
function binarySearch(numbers, key) {
  const middle = Math.floor(numbers.length / 2);
  const currentItem = numbers[middle];

  if (currentItem === key) {
    return true;

  // Go search the right side
  } else if (currentItem < key && numbers.length > 1) {
    return binarySearch(numbers.splice(middle, numbers.length), key);
  
  // Go search the left side
  } else if (currentItem > key && numbers.length > 1) {
    return binarySearch(numbers.splice(0, middle), key);

  } else {
    return false;
  }
}

export default binarySearch;