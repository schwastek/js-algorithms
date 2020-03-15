/**
 * Sorts an array of integers using shell sort.
 *
 * @param {number[]} array The array of integers
 * @returns {number[]} Sorted array.
 */
function shellSort(array) {
  let gap = Math.floor(array.length / 2);

  while (gap > 0) {
    for (let i = gap; i < array.length; i += 1) {
      const temp = array[i];

      // Shift earlier gap-sorted elements up until the correct position for `a[i]` is found
      let j = i;
      while ((j >= gap) && (array[j - gap]) > temp) {
        array[j] = array[j - gap];
        j -= gap;
      }

      array[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }

  return array;
}

// [-56, -16, 55, 85, 96]
const result = shellSort([55, -56, 85, 96, -16]);
console.log(result);
