/** @module */

/**
 * Sorts an array of integers using insertion sort.
 * @static
 * @example
 * import insertionSort from '../insertion-sort/insertionSort';
 * const array = [37, 23, 91, 12, -16];
 * insertionSort(array);
 * // [-16, 12, 23, 37, 91]
 * console.log(array);
 * @param {Array} array The array of integers
 * @returns {Array} Sorted array.
 */
function insertionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j > 0; j -= 1) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      }
    }
  }

  return array;
}

export default insertionSort;
