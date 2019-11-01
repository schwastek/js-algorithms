/**
 * Sorts an array of integers using quicksort.
 * @example
 * import quicksortBasic from './quicksort/quicksortBasic';
 * const array = [3, 7, 8, 5, 2, 1, 9, 5, 4];
 * quicksortBasic(array);
 * // [1, 2, 3, 4, 5, 5, 7, 8, 9]
 * console.log(array);
 * @param {Array} array The array of integers.
 * @returns {Array} Sorted array.
 */
function quicksortBasic(arr) {

  // Base case: an empty array or an array with one element (both are already "sorted").
  if (arr.length < 2) {
    return arr;
  }

  // Pick a pivot
  const pivot = arr.shift();

  // Sub-array of all the elements less than the pivot
  const smaller = [];

  // Sub-array of all the elements greater than the pivot
  const greater = [];

  // Partition the array into two sub-arrays: 
  // elements less than the pivot and elements greater than the pivot.
  arr.forEach((item) => {
    if (item < pivot) {
      smaller.push(item);
    } else {
      greater.push(item);
    }
  });

  // Recursively apply quicksort to the two sub-arrays.
  // Divide and conquer works by breaking a problem down into smaller and smallerpieces.
  // If the sub-arrays are sorted, then you can combine the whole thing like this:
  // left array + pivot + right array - and you get a sorted array.
  return quicksortBasic(smaller).concat(pivot, quicksortBasic(greater));
}

export default quicksortBasic;