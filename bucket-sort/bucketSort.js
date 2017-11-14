/** @module */

import insertionSort from '../insertion-sort/insertionSort';

/**
 * Sorts an array of positive integers using bucket sort.
 * @static
 * @requires module:insertion-sort/insertionSort
 * @example
 * import bucketSort from '../bucket-sort/bucketSort';
 * const array = [8211, 9559, 1986, 7022, 2919];
 * bucketSort(array);
 * // [1986, 2919, 7022, 8211, 9559]
 * console.log(array);
 * @see {@link https://initjs.org/bucket-sort-in-javascript-dc040b8f0058 Implement Bucket Sort in JavaScript - Michael Mitrakos}
 * @see {@link http://www.javaprogrammingforums.com/algorithms-recursion/20280-how-know-size-number-buckets-bucket-sort.html How to know size and number of buckets in bucket sort?}
 * @param {Array} array The array of positive integers
 * @returns {Array} Sorted array.
 */
function bucketSort(array) {
  const bucketSize = 5;
  const buckets = new Array(bucketSize);
  let min = array[0];
  let max = array[0];
  let [i, j, k] = [0, 0, 0];

  for (i = 0; i < array.length; i += 1) {
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
  }

  const range = (((max - min) + 1) / bucketSize);

  for (i = 0; i < buckets.length; i += 1) {
    buckets[i] = [];
  }

  // Distribute elements among buckets
  for (i = 0; i < array.length; i += 1) {
    const index = Math.floor((array[i] - min) / range);
    buckets[index].push(array[i]);
  }

  // Sort elements within each bucket
  for (i = 0; i < buckets.length; i += 1) {
    const bucket = buckets[i];

    insertionSort(bucket);

    // Copy back
    for (j = 0; j < bucket.length; j += 1) {
      array[k] = bucket[j];
      k += 1;
    }
  }

  return array;
}

export default bucketSort;
