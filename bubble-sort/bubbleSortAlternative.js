/** @module */

/**
 * Sorts an array of integers using bubble sort.
 * @static
 * @example
 * import bubbleSortAlternative from '../bubble-sort/bubbleSortAlternative';
 * const array = [-63, -73, 66, -84, -8];
 * bubbleSortAlternative(array);
 * // [-84, -73, -63, -8, 66]
 * console.log(array);
 * @param {Array} array The array of integers
 * @returns {Array} Sorted array.
 */
function bubbleSortAlternative(array) {
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

export default bubbleSortAlternative;
