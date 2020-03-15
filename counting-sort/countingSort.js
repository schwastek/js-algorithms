/**
 * Sorts an array of positive integers using counting sort.
 *
 * @param {number[]} array The array of positive integers
 * @returns {number[]} Sorted array.
 */
function countingSort(array) {
  let i = 0;
  let j = 0;
  const count = [];

  for (i = 0; i < array.length; i += 1) {
    if (typeof count[array[i]] === 'undefined') {
      count[array[i]] = 0;
    }

    count[array[i]] += 1;
  }

  for (i = 0; i < count.length; i += 1) {
    while (count[i] > 0) {
      array[j] = i;
      j += 1;
      count[i] -= 1;
    }
  }

  return array;
}

// [910, 3765, 5282, 5376, 6097]
const result = countingSort([5282, 6097, 3765, 910, 5376]);
console.log(result);
